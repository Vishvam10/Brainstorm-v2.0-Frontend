<template>
    <div class="bg">
        <span style="visibility: hidden" id="base_api_url">{{BASE_API_URL}}</span>
        <span style="visibility: hidden" id="deck_id">{{$route.params.deck_id}}</span>
        <div class="dashboard">
            <span style="visibility: hidden" id="base_api_url">{{BASE_API_URL}}</span>
            <div class="d-flex flex-row justify-content-between sticky-top mb-5" id="head">
                <h1 class="fw-bold">User's Dashboard</h1>
                <span class="d-flex flex-row justify-content-between align-items-center" style="width: 10rem;">
                    <router-link to="/me">
                        <ion-icon name="settings-outline"></ion-icon>
                    </router-link>
                    <button class="btn btn-primary btn-lg mt-1" style="height: 3.4rem; border-radius: 1rem;" id="logoutBtn" @click="logoutHandler">Logout</button>
                </span>
            </div>            
            <h2 class="mt-4 mb-4 fw-bold">Decks</h2>
            <Decks :decks="decks" @deckDeleted="getDecks" />
            <h2 class="mb-4 mt-4 fw-bold">Performance : </h2>
            <div class="mt-5">
                <div class="row">
                    <div class="col-4 d-flex flex-column">
                        <Performance />
                    </div>
                    <div class="col-8">
                        <Chart />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Decks from "./Decks.vue"
import Performance from "./Performance.vue"
import Chart from "./Chart.vue"

export default {
    name: 'App',
    components: {
        Decks,
        Performance,
        Chart
    },
    data() {
        return {
            decks: [],
            reviews: []
        }
    },
    methods: {
        getDecks() {
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
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
                this.decks = JSON.parse(JSON.stringify(data))
                this.getReviews(JSON.parse(JSON.stringify(data)))
            })
            .catch(err => console.log(err))
        },
        getReviews(decks) {
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const auth_token = localStorage.getItem("user_access_token").textContent;
            let i = 0, n = decks.length;
            while(i < n) {
                const url = `${BASE_API_URL}/api/review/${decks[i].deck_id}`;
                console.log("URL : ", url);
                i++;
            // fetch(url, {
            //     method: "GET",
            //     mode: "cors",
            //     headers: {
            //         'Access-Control-Allow-Origin': "*",
            //         'Authorization': `Bearer ${auth_token}`,
            //         'Accept' : "application/json"
            //     }  
            // })
            // .then(res => res.json())
            // .then(data => {
            //     console.log(data, typeof(data));
            // })
            // .catch(err => console.log(err))
            }
        },
        logoutHandler() {
            localStorage.clear();
            this.$router.push({ name: 'login' }) 
        }
    },
    mounted() {
        this.getDecks();
    },
}
</script>

<style scoped>
ion-icon {
    color: #0d6efd;
    margin: 0rem 0rem -0.5rem -1rem;
}

</style>