<template>
    <div class="deck-card" data-ID="{{deck.deck_id}}">
        <div class="row">
            <div class="col-8">
                <h4 class="fw-bold text-secondary">Name</h4>
            </div>
            <div class="col-4">
                <div class="deck_options_menu" @click="toggleDeckOptionsMenu">
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                    <div class="deck_options" v-if="showOptions">
                        <a href="" style="margin: 0.2rem 0rem 0rem 0rem">
                            <ion-icon name="cloud-upload-outline"></ion-icon>
                        </a>
                        <router-link to="/deck/edit/2" style="margin: 0.2rem 0rem 0rem 0rem">
                            <ion-icon name="create-outline" aria-label="Edit"></ion-icon>
                        </router-link>
                        <form>
                            <input type="hidden" name="name" value="value">
                            <a href="/deck-management/delete?deck_id={{deck.deck_id}}&&deleteCards=True" style="margin: 0.2rem 0rem 0rem 0rem">
                                <ion-icon name="trash-outline"></ion-icon>
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div style="display: flex; flex-direction: column; justify-content: left; color: rgb(165, 165, 165);">
                <div class="col-9">
                    <p class="fs-5 mb-1 mt-1"><span class="fw-bold">Score :</span> 96%</p> 
                    <p class="fs-5 mb-1 mt-1"><span class="fw-bold">Last Reviewed :</span> 12-02-2002</p>
                </div>
            </div>
        </div>
        <div class="row" style="margin: 0.4rem 0rem 0rem 0rem">
            <a href="/play?deck_id={{deck.deck_id}}" id="playButton" class="d-flex flex-row justify-content-center align-items-center">Play</a>
        </div>
    </div>
    <router-view></router-view>
</template>

<script>

export default {
    name: "Deck",
    data() {
        return {
            showOptions: false,
        }
    },
    methods: {
        toggleDeckOptionsMenu() {
            this.showOptions = !this.showOptions
            console.log(this.showOptions);
        },
    },   
}
</script>

<style scoped>
    ion-icon {
        font-size: 2rem;
    }
    .deck_options_menu {
        margin: 0rem 0rem 4.1rem 4rem;
    }
    .deck_options {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 5rem;
        padding: 1rem;
        margin: 0rem 0rem -12rem -3rem;
        height: 12rem;
        box-shadow: rgb(120 123 127 / 20%) 0px 8px 16px;
        border-radius: 1rem;
    }
    .hide {
        display: none;
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
    }
</style>