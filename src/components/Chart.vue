<template>
    <span style="visibility: hidden;" id="base_api_url">{{BASE_API_URL}}</span>
    <div class="col-8" id="chartContainer">
        <select class="form-select mb-5" aria-label="Default select example" style="height: 4rem;border-radius: 1rem; font-size: 1.6rem;" id="deckSelection">
            <template v-for="(deck, index) in decks" :key="deck.deck_id">
                <template v-if="index == 0">
                    <option selected :value="deck.deck_id">{{deck.deck_name}}</option>
                </template>
                <template v-else>
                    <option :value="deck.deck_id">{{deck.deck_name}}</option>
                </template>
            </template>            
        </select>
        <div class="chart" style="width: 60rem;">
            <canvas id="myChart"></canvas>             
        </div>
    </div>
</template>

<script>

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

setTimeout(() => {

    const ctx = document.getElementById("myChart");
    const deckSelection = document.getElementById("deckSelection");

    const BASE_API_URL = document.getElementById("base_api_url").textContent;
    const user_id = localStorage.getItem("user_id");
    const auth_token = localStorage.getItem("user_access_token");

    //_ CHARTS

    var reviews = []

    var results = {
        total_q: 0,
        easy_q: 0,
        medium_q: 0,
        hard_q: 0,
        score: 0,
    };

    var selectedDeck = -1;

    Array.from(document.getElementsByTagName("option")).forEach((ele) => {
    
        const deck_id = ele._value;
        const BASE_API_URL = document.getElementById("base_api_url").textContent;
        const auth_token = localStorage.getItem("user_access_token");

        const url = `${BASE_API_URL}/api/review/${deck_id}`;
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
            data["deck_id"] = deck_id;
            results.easy_q = data.easy_q;
            results.medium_q = data.medium_q;
            results.hard_q = data.hard_q;
            results.total_q = data.total_q;
            reviews.push(data)
        })
        .catch(err => console.log(err))
    })
    console.log("Reviews : ", reviews, typeof(reviews));



    const myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Total Questions",
                "Easy Questions",
                "Medium Questions",
                "Hard Questions",
            ],
            datasets: [
            {
                label: "# of Questions",
                data: [
                    results.total_q,
                    results.easy_q,
                    results.medium_q,
                    results.hard_q,
                ],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
                barPercentage: 0.25,
            },
            ],
        },
        options: {
            scales: {
            y: {
                beginAtZero: true,
            },
            },
            plugins: {
            title: {
                display: true,
                text: "Distribution of # of Questions",
            },
            },
        },
    });

    const getReview = (deck_id) => {
        const rev = reviews.filter(x => x.deck_id == deck_id)
        console.log(rev)
        results = {...rev}
        console.log("RES : ", results[0])
    }

    const updateChart = (chart) => {
        const chartData = chart.data.datasets[0].data;
        console.log(chartData);
        chartData[0] = results[0].total_q;
        chartData[1] = results[0].easy_q;
        chartData[2] = results[0].medium_q;
        chartData[3] = results[0].hard_q;
        chart.update();
    };

    deckSelection.addEventListener("change", function (e) {
    e.preventDefault();
    selectedDeck = deckSelection.value;
    if (selectedDeck !== -1) {
        getReview(selectedDeck);
        updateChart(myChart);
    }
    });
}, 1000)


export default {
    name: "Chart",
    props: ["decks"],
}
</script>

