<template>
     <div class="bg">
        <span style="visibility: hidden" id="base_api_url">{{BASE_API_URL}}</span>
        <span style="visibility: hidden" id="deck_id">{{$route.params.deck_id}}</span>
        <div class="edit_deck">
            <div class="details" style="margin: 1rem 0rem 0rem 0rem">
                <router-link to="/dashboard" class="link-primary d-flex justify-content-center" style="margin: 0rem 3rem 2rem 0rem; position: absolute;">
                    <ion-icon name="chevron-back-outline" style="position: relative; top: 1rem"></ion-icon>
                </router-link>
                <h1 class="fw-bold" style="position: relative; top: 0rem; left: 41%;">Edit Deck</h1>
            </div>
            <div class="row d-flex">
                <div class="col d-flex flex-column justify-content-center align-items-center">
                    <h4 style="margin: 4rem 8rem 1rem 0rem"><span class="fw-bold">Existing Name :</span> {{deck_details.deck_name}} </h4>
                </div>
            </div>
            <div class="input-group input-group-sm mb-3 d-flex justify-content-center" style="margin: 2rem 0rem 0rem 0rem">
                <div class="row">
                    <form class="edit">
                        <div class="col-12">
                            <input type="text" name="deck_name" id="updatedDeckName" class="form-control form-control-lg">
                            <label for="changeDeckName" class="btn btn-primary btn-lg" style="margin: 2rem 0rem 0rem 0rem; height: 4rem; width: 30rem; display: flex; align-items: center; justify-content: center;">Change Deck Name</label>
                            <button name="submit" class="hide" id="changeDeckName" @click="changeDeckName"></button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col d-flex flex-column justify-content-center align-items-center" style="margin: 0rem 13rem 0rem 0rem">
                    <h4 style="margin: 2rem 1rem 0rem 0rem">Want to edit the cards ?</h4>
                    <router-link :to="'/card/edit/' + $route.params.deck_id " class="link-primary" style="margin: 0.4rem 10rem 2rem 0rem">Click here</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditDeck",
    props: ["deck"],
    data() {
        return {
            deck_details: {}
        }
    },
    methods: {
        getDeckDetails() {
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const deck_id = document.getElementById("deck_id").textContent;
            const user_id = localStorage.getItem("user_id");
            const auth_token = localStorage.getItem("user_access_token");
            const url = `${BASE_API_URL}/api/deck?user_id=${user_id}`;
            console.log("URL : ", url);
            fetch(url, {
                method: "GET",
                mode: "cors",
                headers: {
                    'Access-Control-Allow-Origin': "*",
                    'Authorization': `Bearer ${auth_token}`,
                    'Accept' : "application/json"
                }  
            })
            .then(res => res.json())
            .then(data => {
                console.log(data, typeof(data));
                const deckData = data.filter(d => d.deck_id === deck_id)[0];
                this.deck_details = deckData;
            })
            .catch(err => console.log(err))
        },
        changeDeckName(e) {
            e.preventDefault();
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const deck_id = document.getElementById("deck_id").textContent;
            const user_id = localStorage.getItem("user_id");
            const auth_token = localStorage.getItem("user_access_token");
            const url = `${BASE_API_URL}/api/deck/${deck_id}`;
            console.log("URL : ", url);
            const updatedDeckName = document.getElementById("updatedDeckName").value;
            console.log("DN : ", updatedDeckName);
            const data = {
                "deck_name" : updatedDeckName,
                "user_id" : user_id
            }
            fetch(url, {
                method: "PUT",
                mode: "cors",
                headers: {
                    'Access-Control-Allow-Origin': "*",
                    'Authorization': `Bearer ${auth_token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data, typeof(data));
            })
            .catch(err => console.log(err))
        }
    },
    mounted() {
        this.getDeckDetails();
    },
}
</script>

<style scoped>
ion-icon {
    color: black;
}
</style>