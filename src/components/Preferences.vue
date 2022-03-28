<template>
    <h3 class="mb-5" style="margin: 2rem 0rem 0rem -1rem;">Preferences</h3>
    <div class="input-group input-group-sm mb-3 d-flex flex-column justify-content-center">
        <form id="userPreferences">
            <h6 class="mb-2">Export Format</h6>
            <div class="preference_container">
                <input class="form-check-input" type="radio" name="export_format" value="csv">
                <label class="form-check-label" style="transform: translateX(-8px)"> CSV</label>
                <input class="form-check-input" type="radio" name="export_format" value="excel" selected>
                <label class="form-check-label" style="transform: translateX(-8px)"> Excel</label>
            </div>
            <h6 class="mb-2 mt-3">Report Format</h6>
            <div class="preference_container">
                <input class="form-check-input" type="radio" name="report_format" value="html">
                <label class="form-check-label" style="transform: translateX(-8px)"> HTML</label>
                <input class="form-check-input" type="radio" name="report_format" value="pdf" selected>
                <label class="form-check-label" style="transform: translateX(-8px)"> PDF</label>
            </div>
            <h6 class="mb-2 mt-3">Chat Reminder</h6>
            <div class="preference_container">
                <input class="form-check-input" type="radio" name="reminders" value="on" data-val="on" @click="reminderToggle" id="onReminder">
                <label class="form-check-label" style="transform: translateX(-8px)">On</label>
                <input class="form-check-input" type="radio" name="reminders" value="off" data-val="off" @click="reminderToggle" id="offReminder">
                <label class="form-check-label" style="transform: translateX(-8px)">Off</label>
            </div>
            <div class="row mb-3 mt-3" style="width: 100%;" v-if="chatReminderToggle ">
                <label for="webhook_url" class="mb-3" style="transform: translateX(-8px)" >Webhook URL</label>
                <input type="text" name="webhook_url" class="form-control form-control-lg" id="webhook_url" :value="webhook_url">
                <p style="margin: 1rem 0rem 0rem -0.7rem"> Frequency : Daily at 10:30 AM. </p>
            </div>
            <div class="row mb-3 mt-5">
                <button class="form-control form-control-lg btn btn-primary" style="height: 4rem" @click="updateUserPreferences">Update Preferences</button>
            </div>
            
        </form>
    </div>
</template>

<style scoped>
h6 {
    font-weight: bold;
    margin: 0rem 0rem 0rem -1rem;
}
.preference_container {
    display: flex;
    flex-direction: row;
    width: 50%; 
    justify-content : space-around; 
    align-items: center; 
    /* background: red; */
    margin: 1rem 0rem 0rem -2rem;
}

#reminder_frequency {
    width: 50%;
}
</style>

<script>
export default {
    name: "UserPreferences",
    data() {
        return {
            chatReminderToggle : false,
            up_data : {},
            webhook_url : ""
        }
    },
    methods: {
        reminderToggle(e) {
            console.log("CLICKED", e);
            const val = e.target.dataset.val;
            if(val == "on") {
                this.chatReminderToggle = true
            } else {
                this.chatReminderToggle = false
            }
        },
        getUserPreferenceData() {
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const user_id = localStorage.getItem("user_id");
            const auth_token = localStorage.getItem("user_access_token");
            const url = `${BASE_API_URL}/api/user/update_user_preferences/${user_id}`;
            console.log(url);
            fetch(url, {
                method: "GET",
                mode: "cors",
                headers: {
                    'Access-Control-Allow-Origin': "*",
                    'Authorization': `Bearer ${auth_token}`,
                    'Accept' : "application/json"
                },
            })
            .then(res => res.json())
            .then(data => {
                const parsed_data = JSON.parse(data["user_preferences"])
                const export_format = parsed_data["export_format"]
                const report_format = parsed_data["report_format"]
                const reminders = parsed_data["reminders"]
                document.querySelectorAll(`input[value=${export_format}]`)[0].checked = true
                document.querySelectorAll(`input[value=${report_format}]`)[0].checked = true
                if(reminders == "on") {
                    document.getElementById("onReminder").checked = true;
                } else {
                    document.getElementById("offReminder").checked = true;
                }
                if(data["webhook_url"]) {
                    this.chatReminderToggle = true;
                    this.webhook_url = data["webhook_url"]
                }
            })
            .catch(err => console.log(err))
        },
        updateUserPreferences(e) {
            e.preventDefault();
            e.stopPropagation();
            let form = new FormData(userPreferences);
            let d = {}
            let webhook_url = ""
            for(var pair of form.entries()){
                if(pair[0] == "webhook_url") {
                    webhook_url = pair[1];
                    continue;
                } else {
                    d[pair[0]] = pair[1]
                }
            }
         
            const data = {
                "webhook_url" : webhook_url,
                "user_preferences" : JSON.stringify(d)
            }

            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const user_id = localStorage.getItem("user_id");
            const auth_token = localStorage.getItem("user_access_token");
            const url = `${BASE_API_URL}/api/user/update_user_preferences/${user_id}`;
            console.log(url);
            fetch(url, {
                method: "PUT",
                mode: "cors",
                headers: {
                    'Access-Control-Allow-Origin': "*",
                    'Authorization': `Bearer ${auth_token}`,
                    'Content-Type' : "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err))
        }
    },
    created() {
        setTimeout(() => {
            this.getUserPreferenceData()
        }, 500)
    }
}
</script>