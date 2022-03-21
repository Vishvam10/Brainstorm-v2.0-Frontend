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
            <div v-for="card in cards" :key="card.card_id">
                <div class="input-group input-group-sm mb-3 d-flex justify-content-center" id="existing_cards">
                    <div class="row">
                        <form class="edit">
                            <div class="col-8" style="margin: 1rem 2rem 1rem 0rem;">
                                <input type="text" name="q_edited" :value="card.question" :data-id="card.card_id" class="form-control form-control-lg">
                            </div>
                            <div class="col-4">
                                <input type="text" name="a_edited" :value="card.answer" :data-id="card.card_id" class="form-control form-control-lg">
                            </div>
                            <div class="col-2">
                                <label for="{{card.card_id}}" class="btn btn-primary btn-lg" style="margin: 0rem 0rem 0rem 4rem; height: 4rem; width: 6rem; display: flex; align-items: center; justify-content: center;">Edit</label>
                                <button name="submit" class="hide" data-id="{{card.card_id}}" value="{{card.card_id}}"></button>
                            </div>
                            <div class="col-2">
                                <button class="class=btn btn-danger btn-lg deleteButton" style="margin: 0rem 0rem 0rem 2rem; height: 4rem; width: 6rem; display: flex; align-items: center; justify-content: center;" data-id="card.card_id">Delete</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <button class="d-flex justify-content-center btn btn-outline-primary btn-lg" style="margin: 3rem 1rem 1rem 2rem;" @click="addNewCard">+ Add New Card</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditCard",
    data() {
        return {
            cards : []
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
                console.log(data);
                this.cards = data;
            })
            .catch(err => console.log(err))
        },
        addNewCard() {
            const ec = document.getElementById("existing_cards");
            const markup = 
            `
            <div class="row">
                <div class="edit">
                    <div class="col-8" style="margin: 1rem 2rem 1rem 0rem;">
                        <input type="text" name="q_edited" value="Question" class="form-control form-control-lg">
                    </div>
                    <div class="col-4">
                        <input type="text" name="a_edited" value="Answer" class="form-control form-control-lg">
                    </div>
                    <div class="col-4">
                        <button name="save" class="btn btn-outline-warning btn-lg" style="margin: 0rem 0rem 0rem 4rem; height: 4rem; width: 13.3rem; display: flex; align-items: center; justify-content: center;" id="save">Save</button>
                    </div>
                </div>
            </div>
            `
            console.log("CLICKED");
            ec.insertAdjacentHTML("beforeend", markup);
        },
        editCard(e) {
            e.preventDefault()
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const card_id = e.target.id;
            const url = `${BASE_API_URL}/api/card?card_id=${card_id}`;
            const auth_token = localStorage.getItem("user_access_token");
            console.log("URL : ", url);

            

            fetch(url, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${auth_token}`,
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.cards = data;
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