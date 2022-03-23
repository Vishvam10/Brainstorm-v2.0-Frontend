<template>
    <div class="bg play">
        <span style="visibility: hidden" id="base_api_url">{{BASE_API_URL}}</span>
        <span style="visibility: hidden" id="deck_id">{{$route.params.deck_id}}</span>
        <div class="position_container">
            <div class="cardContainer">
                <div v-for="(card, index) in cards" :key="card.id">
                    <div v-if="index == 0">
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front qacard">
                                    <div class="q_details">
                                        <h2 class="fs-5 mb-2" id="qno">Question No : </h2>
                                        <h4 class="fw-bold mb-5" id="que">{{ card.question }}</h4>
                                        <h5 class="fw-bold mb-5" id="que">{{ index }}</h5>
                                    </div>
                                </div>
                                <div class="flip-card-back">
                                    <div class="q_details">
                                        <h2 class="fs-5 mb-2">Answer : </h2>
                                        <h4 class="fw-bold mb-5" id="ans">{{ card.answer }}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div class="button-wrapper">
                    <template  v-if="submitAllToggle">
                        <button class="btn btn-primary btn-lg" type="button" id="submitBtn" @click="submitHandler">Submit All Answers</button>
                        <router-link to="/dashboard" class="btn btn-primary btn-lg" id="back">Go back to dashboard</router-link>
                    </template >
                    <template  v-else>
                        <div class="answer">
                            <button class="btn btn-primary btn-lg" id="showAnswer" type="button" @click="showAnswer">Show Answer</button>
                        </div>
                        <div class="transit-pages">
                            <button class="btn btn-outline-primary btn-lg" id="nextBtn" @click="gotoNextQuestion">Next Question</button>
                        </div>
                    </template >
                </div>
                
                <div v-if="!submitAllToggle" class="diffcard">
                    <div style="font-size: 1.2rem; color: grey">How difficult is the question ?</div>
                    <div class="submit_ctrl">
                        <div class="d-flex justify-content-center align-items-center flex-row">
                            <input type="radio" id="easy_q" name="difficulty" class="form-check-input">
                            <label for="easy" class="form-check-label" name="dif">Easy</label>
                        </div>
                        <div class="d-flex justify-content-center align-items-center flex-row" style="margin: 1rem 1rem 1rem 2.5rem;">
                            <input type="radio" id="medium_q" name="difficulty" class="form-check-input">
                            <label for="medium" class="form-check-label" name="dif">Medium</label>
                        </div>
                        <div class="d-flex justify-content-center align-items-center flex-row">
                            <input type="radio" id="hard_q" name="difficulty" class="form-check-input">
                            <label for="hard" class="form-check-label" name="dif">Hard</label>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Play",
    data() {
        return {
            cards: [],
            total_no_of_q: 0,
            current_question_no: 0,
            current_question: "",
            current_answer: "",
            qa_data : {
                "easy_q": 0,
                "medium_q": 0,
                "hard_q": 0,
                "total_q": 0,
                "score": 0
            },
            answer_side: false,
            submitAllToggle: false,
        }
    },
    methods: {
        createInitialReview() {
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const deck_id = document.getElementById("deck_id").textContent;
            const url = `${BASE_API_URL}/api/review/${deck_id}`;
            const auth_token = localStorage.getItem("user_access_token");
            console.log("URL : ", url);
            const data = {
                "total_q" : "0",
                "easy_q" : "0",
                "medium_q" : "0",
                "hard_q" : "0",
                "score" : "0"
            };
            fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${auth_token}`,
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                if(data["status"] == 200) {
                    console.log("Review created successfully");
                }
            })
            .catch(err => console.log(err))

        },
        getAllCards() {
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const deck_id = document.getElementById("deck_id").textContent;
            const url = `${BASE_API_URL}/api/card/${deck_id}`;
            const auth_token = localStorage.getItem("user_access_token");
            console.log("URL : ", url);
            fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${auth_token}`,
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(data => {
                this.cards = data;
                this.get_current_question;
                this.get_current_answer;
                this.get_cards_length;
            })
            .catch(err => console.log(err))
        },
        showAnswer(e) {
            e.preventDefault();
            this.answer_side = !this.answer_side
            if(this.answer_side) {
                const i = document.querySelector(".flip-card-inner");
                console.log(i);
                i.style = "transform: rotateY(180deg);"
                document.getElementById("showAnswer").textContent = "Hide Answer";
            } else {
                const i = document.querySelector(".flip-card-inner");
                console.log(i);
                i.style = "transform: rotateY(0deg);"
                document.getElementById("showAnswer").textContent = "Show Answer";
            }
        },
        gotoNextQuestion(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log("CLICKED");
            const choice = document.querySelector('input[name="difficulty"]:checked');
            if(choice == null) {
                return;
            } 
            
            if(this.current_question_no < this.total_no_of_q ) {
                const old_cards = JSON.parse(JSON.stringify(this.cards))
                const ID = choice.id;
               
                this.qa_data[ID]++;
                this.qa_data["total_q"]++;
                this.current_question_no++;

                const updated_cards = old_cards.slice(1);
                
                this.cards = updated_cards;
                // console.log("QD : ", JSON.parse(JSON.stringify(this.qa_data)), " COUNTER : ", this.current_question_no);
            } else {
                this.submitAllToggle = !this.submitAllToggle;
            }

        },
        calculateScore() {
            const res = 10 * ((10*this.qa_data["easy_q"] + 5*this.qa_data["medium_q"] + 1*this.qa_data["hard_q"]) / (this.total_no_of_q));
            this.qa_data["score"] = res;
        },  
        submitHandler(e) {
            e.preventDefault();
            e.stopPropagation();
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const deck_id = document.getElementById("deck_id").textContent;
            const url = `${BASE_API_URL}/api/review/${deck_id}`;
            const auth_token = localStorage.getItem("user_access_token");
            console.log("URL : ", url);
            this.calculateScore();
            const data = {...this.qa_data};
            Object.keys(data).map(function(key, index) {
                data[key] = String(data[key]);
            });
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${auth_token}`,
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data["status"] == 200) {
                    console.log("Review updated successfully");
                }
                this.$router.push({ name: 'dashboard' })
            })
            .catch(err => console.log(err))
        }
    },
    mounted() {
        this.getAllCards();
        this.createInitialReview();
    },
    computed: {
        get_current_question() {
            const current_q = JSON.parse(JSON.stringify(this.cards[this.current_question_no])).question;
            this.current_question = current_q;
        },
        get_current_answer() {
            const current_a = JSON.parse(JSON.stringify(this.cards[this.current_question_no])).answer;
            this.current_answer = current_a;
        },
        get_cards_length() {
            const l = JSON.parse(JSON.stringify(this.cards)).length;
            this.total_no_of_q = l;
        },
    }
}
</script>

<style scoped>
label {
    margin: 0rem 0rem 0rem 2rem;
}
.position_container {
    position: relative;
    top: -5rem;
    left: -12rem;
}
.diffcard {
    height: 30rem;
  width: 16rem;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0rem 4rem 0rem 4rem;
  padding: 2rem;
}
#submitAll {
  display: none;
  background-color: black;
  color: white;
  width: 20rem;
  height: 6rem;
  font-size: 1.6rem;
  border-radius: 2rem;
  position: absolute;
  top: 44%;
  left: 44%;;
}
.flip-card {
  background-color: transparent;
  width: 50rem;
  height: 30rem;
  perspective: 100rem; 
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: all 4s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform-style: preserve-3d;
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
    height: 30rem;
  width: 50rem;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  padding: 8rem;
  color: black;
}

.flip-card-back {
    height: 30rem;
  width: 50rem;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  padding: 8rem;
    transform: rotateY(180deg);
}

</style>