<template>
    <!-- <h1>Play Page</h1>
    <h2>{{ $route.params.deck_id }}</h2> -->
    <div class="bg play">
        <div class="cardContainer">
            <div class="button-wrapper">
                <div class="answer">
                    <button class="btn btn-primary btn-lg" id="showAnswer">Show Answer</button>
                </div>
                <div class="transit-pages">
                    <button class="btn btn-outline-primary btn-lg" id="nextBtn">Next Question</button>
                </div>
            </div>
            <div class="submit-all">
                <button class="btn btn-primary btn-lg" id="submitAll">Submit All Answers</button>
            </div>
            <div class="submit-all">
                <a href="/dashboard" class="btn btn-primary btn-lg" id="back">Go back to dashboard</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Play",
}
</script>