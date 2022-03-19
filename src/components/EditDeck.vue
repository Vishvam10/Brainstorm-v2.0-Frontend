<template>
     <div class="bg">
        <div class="edit_deck">
            <div class="details" style="margin: 1rem 0rem 0rem 0rem">
                <router-link to="/dashboard" class="link-primary d-flex justify-content-center" style="margin: 0rem 3rem 2rem 0rem; position: absolute;">
                    <ion-icon name="chevron-back-outline" style="position: relative; top: 1rem"></ion-icon>
                </router-link>
                <h1 class="fw-bold" style="position: relative; top: 0rem; left: 41%;">Edit Deck</h1>
            </div>
            <div class="row d-flex">
                <div class="col d-flex flex-column justify-content-center align-items-center">
                    <h4 style="margin: 4rem 8rem 1rem 0rem"><span class="fw-bold">Existing Name :</span> Existing Name </h4>
                </div>
            </div>
            <div class="input-group input-group-sm mb-3 d-flex justify-content-center" style="margin: 2rem 0rem 0rem 0rem">
                <div class="row">
                    <form class="edit">
                        <div class="col-12">
                            <input type="text" name="deck_name" class="form-control form-control-lg">
                            <label for="changeDeckName" class="btn btn-primary btn-lg" style="margin: 2rem 0rem 0rem 0rem; height: 4rem; width: 30rem; display: flex; align-items: center; justify-content: center;">Change Deck Name</label>
                            <button name="submit" class="hide" id="changeDeckName"></button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col d-flex flex-column justify-content-center align-items-center" style="margin: 0rem 13rem 0rem 0rem">
                    <h4 style="margin: 2rem 1rem 0rem 0rem">Want to edit the cards ?</h4>
                    <router-link to="/card/edit/asdf323iuh" class="link-primary" style="margin: 0.4rem 10rem 2rem 0rem">Click here</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditDeck",
}
</script>

<style scoped>
ion-icon {
    font-size: 2rem;
    color: black;
}
</style>