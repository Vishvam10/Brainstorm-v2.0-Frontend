<template>
    <div class="mt-5 d-flex flex-row align-items-center">
        <div style="height: 30rem;">
            <div class="deck-card d-flex justify-content-center align-items-center">
                <router-link to="/deck/add">
                    <ion-icon name="add-outline"></ion-icon>
                </router-link>
            </div>
        </div>
        <div class="deck-container">
            <div v-for="deck in decks" :key="deck.deck_id">
                <Deck :deck="deck" @deckDeleted="handleDeckDeleted" />
            </div>
        </div>
    </div>
</template>

<script>
import Deck from "./Deck.vue"

export default {
    name: 'App',
    emits: ["deckDeleted"],
    props: ["decks"],
    methods: {
        handleDeckDeleted() {
            this.$emit("deckDeleted", true)
        },
    },
    components: {
        Deck
    },

}
</script>

<style scoped>
ion-icon[name="add-outline"] {
    font-size: 4rem;
}
</style>