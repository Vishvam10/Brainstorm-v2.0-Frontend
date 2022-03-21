<template>
    <!-- <h1>{{ $route.params.deck_id }}</h1> -->
    <div class="bg">
        <span style="visibility: hidden" id="base_api_url">{{BASE_API_URL}}</span>
        <div class="add-deck">
            <div class="d-flex flex-row justify-content-between mb-5" style="height: 3.2rem;">
                <router-link to="/dashboard">
                    <ion-icon name="chevron-back-outline" style="position: relative; top: 1rem"></ion-icon>
                </router-link>
                <h1 class="fw-bold mb-5" style="position: relative; top: 0rem; right: 40%">Add Deck</h1>
            </div>
            <div class="input-group input-group-sm mb-3 d-flex flex-column justify-content-center" style="margin: 0rem 0rem 0rem -1rem">
                <form id="addQAForm">
                    <div class="row">
                        <div class="col ms-4">
                            <h3 class="fw-bold mb-5 mt-5">Deck Name</h3>
                            <label for="deck_name" class="mb-3">Deck Name</label>
                            <input type="text" name="deck_name" id="deck_name" class="form-control form-control-lg">
                        </div>
                    </div>
                    <h3 class="fw-bold mb-5 mt-5" style="
                        transform: translateX(1rem)">Question and Answers</h3>
                    <div id="inputContainer">
                        <div class="row">
                            <div class="col ms-4">
                                <label for="q1" class="mb-3">Question 1</label>
                                <input type="text" name="q1" class="form-control form-control-lg" id="q1">
                            </div>
                            <div class="col">
                                <label for="a1" class="mb-3">Answer 1</label>
                                <input type="text" name="a1" class="form-control form-control-lg" id="a1">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col ms-4">
                                <label for="q2" class="mb-3">Question 2</label>
                                <input type="text" name="q2" class="form-control form-control-lg" id="q2">
                            </div>
                            <div class="col">
                                <label for="a2" class="mb-3">Answer 2</label>
                                <input type="text" name="a2" class="form-control form-control-lg" id="a2">
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-outline-primary" id="addMoreQA" @click="addMoreQA">Add More QAs</button>
                    <button name="submit" class="form-control form-control-lg btn btn-primary mt-5" style="width: 99%;
                    margin: 1rem 1rem 1rem 1rem; height: 4rem" @click="addAllQAs">Add Them All</button>   
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddDeck",
    data() {
        return {
            questionCounter: 2,
            temp_deck_id: ""
        }
    },
    methods: {
        renderQAs() {
            const markup = 
            `
                <div class="row">
                    <div class="col ms-4">
                    <label for="q${this.questionCounter}" class="mb-3">Question ${this.questionCounter}</label>
                    <input type="text" name="q${this.questionCounter}" class="form-control form-control-lg" id="q${this.questionCounter}">
                    </div>
                    <div class="col">
                    <label for="a${this.questionCounter}" class="mb-3">Answer ${this.questionCounter}</label>
                    <input type="text" name="a${this.questionCounter}" class="form-control form-control-lg" id="a${this.questionCounter}">
                    </div>
                </div>
            `;
            inputContainer.insertAdjacentHTML("beforeend", markup);
        },
        addMoreQA(e) {
            e.preventDefault();
            this.questionCounter++;
            this.renderQAs();
            console.log(this.questionCounter);
        },
        validateDeckName(deck_name) {
            if(deck_name != "" && deck_name.length > 4 && deck_name.length <= 40) {
                return true
            } 
            return false
        },
        validateQAs(questions, answers) {
            for(let i=0; i<questions.length; i++) {
                if(questions[i] == "" || answers[i] == "") {
                    return false
                }
            }
            return true
        },
        validateForm(deck_name, questions, answers){
            if(this.validateDeckName(deck_name) && this.validateQAs(questions, answers) && questions.length == answers.length) {
                return true;
            }
            return false;
        },
        addDeck(deck_name, cards) {
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const url = `${BASE_API_URL}/api/deck`;
            const auth_token = localStorage.getItem("user_access_token");
            const user_id = localStorage.getItem("user_id");
            console.log("URL : ", url);
            const data = {
                user_id,
                deck_name
            }
            fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${auth_token}`,
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.temp_deck_id = data["deck_id"];
                console.log("D1 : ", this.temp_deck_id);
                this.addCards(cards);
            })
            .catch(err => console.log(err))
        },
        addCards(data) {
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            console.log("D : ", this.temp_deck_id);
            const url = `${BASE_API_URL}/api/card/${this.temp_deck_id}`;
            const auth_token = localStorage.getItem("user_access_token");
            console.log("URL : ", url);
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
                console.log(data);
            })
            .catch(err => console.log(err))
            this.temp_deck_id = ""
            console.log(this.temp_deck_id);
        },
        addAllQAs(e) {
            e.preventDefault();
            const formData = new FormData(document.getElementById('addQAForm'))
            let questions = []
            let answers = []
            let deck_name = ""
            for(var pair of formData.entries()){
                let key = pair[0].trim()
                let value = pair[1].trim()
                // data[k] = v;
                if(key == "deck_name") {
                    deck_name = value;
                    continue
                }
                if(key.includes("q")) {
                    questions.push(value)
                    continue
                }
                if(key.includes("a")) {
                    answers.push(value)
                    continue
                }
            }
            console.log(this.validateForm(deck_name, questions, answers));
            if(this.validateForm(deck_name, questions, answers)) {
                const data = {
                    "questions" : questions,
                    "answers" : answers
                }
                this.addDeck(deck_name, data);
            }
        }
    }
}
</script>

<style scoped>
ion-icon {
    color: black;
}
</style>