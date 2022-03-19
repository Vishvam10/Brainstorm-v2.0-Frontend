<template>
    <div class="bg">
        <div class="edit_cards">
            <div class="details sticky-top">
                <ion-icon name="chevron-back-outline" style="position: relative; top: 1rem" @click="$router.go(-1)"></ion-icon>
                <h1 class="fw-bold" style="position: relative; top: -2rem; left: 40.8%;">Edit Cards</h1>
            </div>
                <!-- {% for card in cards %} -->
            <div class="input-group input-group-sm mb-3 d-flex justify-content-center" id="existing_cards">
                <div class="row">
                    <form class="edit">
                        <div class="col-8" style="margin: 1rem 2rem 1rem 0rem;">
                            <input type="text" name="q_edited" value="{{card.question}}" class="form-control form-control-lg">
                        </div>
                        <div class="col-4">
                            <input type="text" name="a_edited" value="{{card.answer}}" class="form-control form-control-lg">
                        </div>
                        <div class="col-2">
                            <label for="{{card.card_id}}" class="btn btn-primary btn-lg" style="margin: 0rem 0rem 0rem 4rem; height: 4rem; width: 6rem; display: flex; align-items: center; justify-content: center;">Edit</label>
                            <button name="submit" class="hide" id="{{card.card_id}}" value="{{card.card_id}}"></button>
                        </div>
                        <div class="col-2">
                            <label for="{{card.card_id}}" class="btn btn-danger btn-lg deleteButton" style="margin: 0rem 0rem 0rem 2rem; height: 4rem; width: 6rem; display: flex; align-items: center; justify-content: center;">Delete</label>
                            <button class="hide" value="{{card.card_id}}" id="{{card.card_id}}"></button>
                        </div>
                    </form>
                </div>
            </div>
                <!-- {% endfor %} -->
            <button class="d-flex justify-content-center btn btn-outline-primary btn-lg" style="margin: 3rem 1rem 1rem 0rem;" @click="addNewCard">+ Add New Card</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditCard",
    methods: {
        addNewCard() {
            const ec = document.getElementById("existing_cards");
            const markup = 
            `
            <div class="row">
                <div class="edit">
                    <div class="col-8" style="margin: 1rem 2rem 1rem 0rem;">
                        <input type="text" name="q_edited" value="{{card.question}}" class="form-control form-control-lg">
                    </div>
                    <div class="col-4">
                        <input type="text" name="a_edited" value="{{card.answer}}" class="form-control form-control-lg">
                    </div>
                    <div class="col-4">
                        <label for="save" class="btn btn-outline-warning btn-lg" style="margin: 0rem 0rem 0rem 4rem; height: 4rem; width: 13.3rem; display: flex; align-items: center; justify-content: center;">Save</label>
                        <button name="save" class="hide" id="save"></button>
                    </div>
                </div>
            </div>
            `
            console.log("CLICKED");
            ec.insertAdjacentHTML("beforeend", markup);
        }
    }
}
</script>

<style scoped>
ion-icon {
    font-size: 2rem;
    color: black;
}
</style>