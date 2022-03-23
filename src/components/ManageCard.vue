<template>
    <div class="bg">
        <span style="visibility: hidden; display: none;" id="base_api_url">{{BASE_API_URL}}</span>
        <span style="visibility: hidden; display: none;" id="deck_id">{{$route.params.deck_id}}</span>
        <div class="edit_cards">
            <div class="details sticky-top">
                <router-link to="/dashboard">
                    <ion-icon name="chevron-back-outline" style="position: relative; top: 1rem"></ion-icon> 
                </router-link>
                <h1 class="fw-bold" style="position: relative; top: -2rem; left: 40.8%;">Edit Cards</h1>
            </div>
            <div id="existing_cards">
                <div v-for="card in cards" :key="card.card_id">
                    <div class="input-group input-group-sm mb-3 d-flex justify-content-center">
                        <div class="row">
                            <form class="edit">
                                <div class="col-8" style="margin: 1rem 2rem 1rem 0rem;">
                                    <input type="text" name="q_edited" :value="card.question" :data-id="card.card_id" class="form-control form-control-lg">
                                </div>
                                <div class="col-4">
                                    <input type="text" name="a_edited" :value="card.answer" :data-id="card.card_id" class="form-control form-control-lg">
                                </div>
                                <div class="col-2">
                                    <button class="btn btn-primary btn-lg" style="margin: 0rem 0rem 0rem 2rem; height: 4rem; width: 6rem; display: flex; align-items: center; justify-content: center;" :data-id="card.card_id" type="button" @click="editCard">Edit</button>
                                </div>
                                <div class="col-2">
                                    <button class="btn btn-danger btn-lg deleteButton" style="margin: 0rem 0rem 0rem 2rem; height: 4rem; width: 6rem; display: flex; align-items: center; justify-content: center;" :data-id="card.card_id" type="button" @click="deleteCard">Delete</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div v-if="addNewCardToggle">
                    <div class="input-group input-group-sm mb-3 d-flex justify-content-center" id="anc">
                        <div class="row">
                            <div class="edit">
                                <div class="col-8" style="margin: 1rem 2rem 1rem 0rem;">
                                    <input type="text" name="q_new" class="form-control form-control-lg">
                                </div>
                                <div class="col-4">
                                    <input type="text" name="a_new" class="form-control form-control-lg">
                                </div>
                                <div class="col-2">
                                    <button class="btn btn-success btn-lg" style="margin: 0rem 0rem 0rem 2rem; height: 4rem; width: 6rem; display: flex; align-items: center; justify-content: center;" type="button" @click="addCard">Add</button>
                                </div>
                                <div class="col-2">
                                    <button class="btn btn-outline-danger btn-lg deleteButton" style="margin: 0rem 0rem 0rem 2rem; height: 4rem; width: 6rem; display: flex; align-items: center; justify-content: center;" type="button" @click="toggleAddNewCard">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="d-flex justify-content-center btn btn-outline-primary btn-lg" style="margin: 3rem 1rem 1rem 2rem;" @click="toggleAddNewCard">+ Add New Card</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditCard",
    data() {
        return {
            cards : [],
            addNewCardToggle : false
        }
    },
    methods: {
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
            })
            .catch(err => console.log(err))
        },
        toggleAddNewCard() {
            this.addNewCardToggle = !this.addNewCardToggle
        },
        editCard(e) {
            e.preventDefault();
            e.stopPropagation();
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const card_id = e.target.dataset.id;
            const url = `${BASE_API_URL}/api/card?card_id=${card_id}`;
            const auth_token = localStorage.getItem("user_access_token");
            console.log("URL : ", url);
            const question = Array.from(document.getElementsByName("q_edited")).filter(x => x.dataset.id == card_id)[0].value
            const answer = Array.from(document.getElementsByName("a_edited")).filter(x => x.dataset.id == card_id)[0].value
            console.log(question, answer);
            const data = {
                "question" : question,
                "answer" : answer
            }
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
                this.getAllCards();
            })
            .catch(err => console.log(err))
        },
        deleteCard(e) {
            e.preventDefault();
            e.stopPropagation();
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const card_id = e.target.dataset.id;
            const url = `${BASE_API_URL}/api/card?card_id=${card_id}`;
            const auth_token = localStorage.getItem("user_access_token");
            console.log("URL : ", url);

            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${auth_token}`,
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data["status"] == 200) {
                    console.log("DELETED SUCCESSFULLY");
                    this.getAllCards();
                }
            })
            .catch(err => console.log(err))
        },
        addCard(e) {
            e.preventDefault();
            e.stopPropagation();
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const deck_id = document.getElementById("deck_id").textContent;
            const url = `${BASE_API_URL}/api/card/${deck_id}`;
            const auth_token = localStorage.getItem("user_access_token");
            console.log("URL : ", url);
            const question = []
            const answer = []
            const q = document.getElementsByName("q_new")[0].value;
            const a = document.getElementsByName("a_new")[0].value;
            question.push(q)
            answer.push(a)
            const data = {
                "questions" : question,
                "answers" : answer
            }
            console.log(data);
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
                if(data["status"] == 200) {
                    console.log("Card created successfully");
                    this.getAllCards();
                }
            })
            .catch(err => console.log(err))
        }
    },
    mounted() {
        this.getAllCards()
    }
}
</script>

<style scoped>
ion-icon {
    color: black;
}
</style>