<template>
    <div class="col-8" id="chartContainer">
        <select class="form-select mb-5" aria-label="Default select example" style="height: 4rem;border-radius: 1rem; font-size: 1.6rem;" id="deckSelection">
            <option selected value="-1">Choose Deck</option>
            <!-- {% for deck in decks %} -->
                <!-- <option value="{{deck.deck_id}}" id="deckOptions">{{deck.deck_name}}</option> -->
            <option value="Option 1"></option>
            <option value="Option 2"></option>
            <option value="Option 3"></option>
            <!-- {% endfor %} -->
        </select>
        <div class="chart" style="width: 60rem;">
            <canvas id="myChart"></canvas>             
        </div>
    </div>
</template>

<script>
export default {
    name: "Chart",
    mounted() {
      if (document.getElementById('chartContainer')) return; // was already loaded
      console.log("ASLDJASDKHLASD");
      var scriptTag = document.createElement("script");
      scriptTag.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.6.0/chart.min.js";
      document.getElementsByTagName('head')[0].appendChild(scriptTag);
    }
    
}
</script>