<template>
    <span style="visibility: hidden; display: none;" id="base_api_url">{{ BASE_API_URL }}</span>
    <div class="deck-card">
        <div class="row">
            <div class="col-8">
                <h4 class="fw-bold text-secondary">{{ deck.deck_name }}</h4>
            </div>
            <div class="col-4">
                <div class="deck_options_menu" @click="toggleDeckOptionsMenu">
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                    <div class="deck_options" v-if="showOptions">
                        <router-link :to="'/upload/' + deck.deck_id" style="margin: 0.2rem 0rem 0rem 0rem">
                            <ion-icon name="cloud-upload-outline"></ion-icon>
                        </router-link>
                        <span style="margin: 0.2rem 0rem 0rem 0rem" @click="exportDeck">
                            <ion-icon name="cloud-download-outline"></ion-icon>
                        </span>
                        <router-link :to="'/deck/edit/' + deck.deck_id" style="margin: 0.2rem 0rem 0rem 0rem">
                            <ion-icon name="create-outline" aria-label="Edit"></ion-icon>
                        </router-link>
                        <span id="deleteBtn" style="margin: 0.2rem 0rem 0rem 0rem" @click="deleteHandler">
                            <ion-icon name="trash-outline" class="tr" :id="deck.deck_id"></ion-icon>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div style="display: flex; flex-direction: column; justify-content: left; color: rgb(165, 165, 165);">
                <div class="col-9">
                    <p class="fs-5 mb-1 mt-1"><span class="fw-bold">Score :</span> {{ getScore }}%</p> 
                    <p class="fs-5 mb-1 mt-1"><span class="fw-bold">Last Reviewed :</span> {{ getLastReviewed }}</p>
                </div>
            </div>
        </div>
        <div class="row" style="margin: -0.6rem 0rem 0rem 0rem">
            <router-link :to="'/play/' + deck.deck_id" id="playButton" class="d-flex flex-row justify-content-center align-items-center">Play</router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: "Deck",
    emits: ["deckDeleted"],
    props: ["deck"],
    data() {
        return {
            deck: this.deck,
            review: {},
            showOptions: false,
            temp_times_clicked: 0,
            temp_deck_id: ""
        }
    },
    methods: {
        toggleDeckOptionsMenu() {
            this.showOptions = !this.showOptions
        },
        alertDeleteDeck(e) {
            document.getElementById(this.temp_deck_id).style.color = "red";
            console.log(this.temp_times_clicked);
            setTimeout(() => {
                if(document.getElementById(this.temp_deck_id)) {
                    document.getElementById(this.temp_deck_id).style.color = "rgb(13,110,253)";
                }
                this.temp_times_clicked = 0;
            }, 1500)
        },
        deleteDeck() {
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const deck_id = this.temp_deck_id;
            const auth_token = localStorage.getItem("user_access_token");
            const url = `${BASE_API_URL}/api/deck/${deck_id}`;
            fetch(url, {
                method: "DELETE",
                mode: "cors",
                headers: {
                    'Access-Control-Allow-Origin': "*",
                    'Authorization': `Bearer ${auth_token}`,
                    'Content-Type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(data => {
                console.log(data, typeof(data));
                this.$emit('deckDeleted', true)
            })
            .catch(err => console.log(err));
        },
        deleteHandler(e) {
            e.preventDefault();
            e.stopPropagation();
            const deck_id = e.target.id;
            this.temp_times_clicked++;
            if(this.temp_times_clicked == 1) {
                this.temp_deck_id = deck_id;
                this.alertDeleteDeck();
            }
            if(this.temp_times_clicked == 2 && deck_id == this.temp_deck_id) {
                console.log("GOING TO BE DELETED", this.temp_deck_id);
                this.deleteDeck()
                this.temp_times_clicked = 0;
                this.temp_deck_id = "";
            }
        },
        getReview() {
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const deck_id = this.deck.deck_id;
            const auth_token = localStorage.getItem("user_access_token");
            const url = `${BASE_API_URL}/api/review/${deck_id}`;
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
                this.review = data;
            })
            .catch(err => console.log(err))
        },
        exportDeck(e) {
            e.preventDefault();
            e.stopPropagation();
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const deck_id = this.deck.deck_id;
            const user_id = localStorage.getItem("user_id");
            const auth_token = localStorage.getItem("user_access_token");
            const url = `${BASE_API_URL}/api/download/${deck_id}`;
            const data = {
                "user_id" : user_id
            }
            fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${auth_token}`,
                    'Access-Control-Allow-Origin': '*',
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data)
            })
            .then((res) => res.blob())
            .then(data => {
                const deck_name = this.deck.deck_name;
                const file_type = localStorage.getItem("export_format")
                console.log(data["type"]);
                let url = window.URL.createObjectURL(data);
                var link = document.createElement('a');
                document.body.appendChild(link);
                link.style = "display: none";
                link.href = url;
                if(file_type == "excel") {
                    link.download = `${deck_name}.xlsx`;
                } else {
                    link.download = `${deck_name}.csv`;
                }
                link.click();
            })
            .catch(err => console.log(err))
        }
    },
    computed: {
        getScore() {
            if(JSON.parse(JSON.stringify(this.review))["error_message"]) {
                return 0
            } 
            return parseInt(JSON.parse(JSON.stringify(this.review))["score"])
        },
        getLastReviewed() {
            if(JSON.parse(JSON.stringify(this.review))["error_message"]) {
                return "Not reviewed yet"
            } 
            return JSON.parse(JSON.stringify(this.review))["last_reviewed"]
        }
    },
    created() {
        this.getReview()
    }     
}
</script>

<style scoped>
    ion-icon {
        font-size: 1.6rem;
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    .deck_options_menu {
        margin: 0rem 0rem 4.1rem 4rem;
    }
    .deck_options {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 4rem;
        padding: 1rem;
        margin: -0.1rem 0rem -12rem -2.1rem;
        height: 12rem;
        box-shadow: rgb(120 123 127 / 20%) 0px 8px 16px;
        border-radius: 1rem;
        
    }
    .confirm_deletion {
        font-size: 1rem;
        color: #dc3545;

    }
    .hide {
        display: none;
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
    }
</style>