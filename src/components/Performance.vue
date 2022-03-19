<template>
    <div>
        <h3 class="fs-3 mt-2 mb-4">Overall Score Analysis</h3>
        <h4 class="fs-4 mt-3" style="color: grey;">Average Score : </h4>
        <h4 class="fs-4 mt-3" style="color: grey;">Standard Deviation of Score : </h4>
    </div>
    <div>
        <h3 class="fs-3 mt-5 mb-4">Overall Deck Analysis</h3>
        <h4 class="fs-4 mt-3" style="color: grey;">Hardest Deck : </h4>
        <h4 class="fs-4 mt-3" style="color: grey;">Easiest Deck : </h4>
    </div>
    <div style="width: 88%;">
        <h3 class="fs-3 mt-5 mb-5">Review Required For Decks</h3>
        <div class="row">
            <!-- {% if revisionRequired %}      -->
                <!-- {% for r in revisionRequired %} -->
            <!-- <div class="col" style="margin: 1rem 0rem 1rem 1rem;">
                <h4 class="reviewChip">{{r}}</h4>
            </div> -->
                <!-- {% endfor %} -->
            <!-- {% else %} -->
            <div class="col" style="margin: 1rem 0rem 1rem 1rem;">
                <h4 class="reviewChip" style="border: 1px solid #00B74A; color: #00B74A; background-color: transparent;">Good job ! None of the decks require a review</h4>
            </div>
            <!-- {% endif %} -->
        </div>
    </div>
  
</template>

<script>

export default {
    name: "Performance",
}
</script>