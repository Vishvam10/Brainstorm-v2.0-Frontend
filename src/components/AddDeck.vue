<template>
    <!-- <h1>{{ $route.params.deck_id }}</h1> -->
    <div class="bg">
        <div class="add-deck">
            <div class="d-flex flex-row justify-content-between mb-5" style="height: 3.2rem;">
                <router-link to="/dashboard">
                    <ion-icon name="chevron-back-outline" style="position: relative; top: 1rem"></ion-icon>
                </router-link>
                <h1 class="fw-bold mb-5" style="position: relative; top: 0rem; right: 40%">Add Deck</h1>
            </div>
            <div class="input-group input-group-sm mb-3 d-flex flex-column justify-content-center" style="margin: 0rem 0rem 0rem -1rem">
                <form>
                    <div class="row">
                        <div class="col ms-4">
                            <h3 class="fw-bold mb-5 mt-5">Deck Name</h3>
                            <label for="deck_name" class="mb-3">Deck Name</label>
                            <input type="text" name="deck_name" id="deck_name" class="form-control form-control-lg">
                        </div>
                    </div>
                    <h3 class="fw-bold mb-5 mt-5" style="
                        transform: translateX(1rem)">Question and Answers</h3>
                    <div id="inputContainer">
                        <div class="row">
                            <div class="col ms-4">
                                <label for="q1" class="mb-3">Question 1</label>
                                <input type="text" name="q1" class="form-control form-control-lg" id="q1">
                            </div>
                            <div class="col">
                                <label for="a1" class="mb-3">Answer 1</label>
                                <input type="text" name="a1" class="form-control form-control-lg" id="a1">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col ms-4">
                                <label for="q2" class="mb-3">Question 2</label>
                                <input type="text" name="q2" class="form-control form-control-lg" id="q2">
                            </div>
                            <div class="col">
                                <label for="a2" class="mb-3">Answer 2</label>
                                <input type="text" name="a2" class="form-control form-control-lg" id="a2">
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-outline-primary" id="addMoreQA">Add More QAs</button>
                    <input type="hidden" value="2" id="QACount" name="QACount">
                    <input type="submit" name="submit" class="form-control form-control-lg btn btn-primary mt-5" style="width: 99%;
                    margin: 1rem 1rem 1rem 1rem;" value="Add Them All">   
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddDeck",
}
</script>

<style scoped>
ion-icon {
    color: black;
}
</style>