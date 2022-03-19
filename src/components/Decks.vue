<template>
    <div class="mt-5 d-flex flex-row align-items-center">
        <div style="height: 30rem;">
            <div class="deck-card d-flex justify-content-center align-items-center">
                <router-link to="/deck/add/2">
                    <ion-icon name="add-outline"></ion-icon>
                </router-link>
            </div>
        </div>
        <div class="deck-container">
            <!-- {% for deck in decks %} -->
            <Deck />
            <!-- {% endfor %} -->
        </div>
    </div>
</template>

<script>
import Deck from "./Deck.vue"

export default {
    name: 'App',
    components: {
        Deck
    },    
}
</script>