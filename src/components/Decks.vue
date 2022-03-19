<template>
    <div class="mt-5 d-flex flex-row align-items-center">
        <div style="height: 30rem;">
            <div class="deck-card d-flex justify-content-center align-items-center">
                <a href="/deck/add">
                    <ion-icon name="add-outline"></ion-icon>
                </a>
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