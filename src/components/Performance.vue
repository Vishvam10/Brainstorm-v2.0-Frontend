<template>
    <span style="visibility: hidden;" id="base_api_url">{{BASE_API_URL}}</span>
    <div>
        <h3 class="fs-3 mt-2 mb-4">Overall Score Analysis</h3>
        <h4 class="fs-4 mt-3" style="color: grey;">Average Percentage : {{ performance_data.avg_score }}</h4>
        <h4 class="fs-4 mt-3" style="color: grey;">Max Percentage : {{ performance_data.max_score }}%</h4>
        <h4 class="fs-4 mt-3" style="color: grey;">Min Percentage : {{ performance_data.min_score }}%</h4>
    </div>
    <div>
        <h3 class="fs-3 mt-5 mb-4">Overall Deck Analysis</h3>
        <h4 class="fs-4 mt-3" style="color: grey;">Hardest Deck : <b>{{ performance_data.min_score_deck }}</b> </h4>
        <h4 class="fs-4 mt-3" style="color: grey;">Easiest Deck : <b>{{ performance_data.max_score_deck }}</b> </h4>
    </div>
    <div style="width: 70%;">
        <h3 class="fs-3 mt-5 mb-5">Review Required For Decks</h3>
        <div class="row">
            <template v-if="revisionRequiredToggle">
                <!-- {% for r in revisionRequired %} -->
                <template v-for="r in performance_data.revision_required" :key="r">
                    <div class="col" style="margin: 1rem 0rem 1rem 1rem;">
                        <h4 class="reviewChip">{{r}}</h4>
                    </div>
                </template>
            </template>
            <template v-else>
                <div class="col" style="margin: 1rem 0rem 1rem 1rem;">
                    <h4 class="reviewChip" style="border: 1px solid #00B74A; color: #00B74A; background-color: transparent;">Good job ! None of the decks require a review</h4>
                </div>
            </template>
        </div>
    </div>
  
</template>

<script>

export default {
    name: "Performance",
    props: ["ndecks"],
    data() {
        return {
            performance_data : {},
            revisionRequiredToggle : true
        }
    },
    methods : {
        getPerformance() {
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const user_id = localStorage.getItem("user_id");
            const auth_token = localStorage.getItem("user_access_token");
            const url = `${BASE_API_URL}/api/performance/${user_id}`;
            fetch(url, {
                method: "GET",
                mode: "cors",
                headers: {
                    'Access-Control-Allow-Origin': "*",
                    'Authorization': `Bearer ${auth_token}`,
                    'Accept' : "application/json"
                }  
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.performance_data = data
            })
            .catch(err => console.log(err))
        }
    },
    mounted() {
        setTimeout(() => {
            if(this.ndecks >= 2) {
                console.log("PERFORMANCE ENABLED");
                this.getPerformance();  
            }
        }, 500)
    }
}
</script>