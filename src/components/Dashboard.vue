<template>
    <div class="bg">
        <div class="dashboard">
            <div class="d-flex flex-row justify-content-between sticky-top mb-5" id="head">
                <h1 class="fw-bold">User's Dashboard</h1>
                <button class="btn btn-primary btn-lg mt-1" style="height: 3.4rem; border-radius: 1rem;" id="logoutBtn">Logout</button>
            </div>            
            <h2 class="mt-4 mb-4 fw-bold">Decks</h2>
            <Decks />
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
}
</script>
