<template>
    <div class="bg">
        <span style="visibility: hidden; display: none" id="base_api_url">{{BASE_API_URL}}</span>
        <div class="settings_container">
            <h2 class="settings_header">Settings</h2>
            <router-link to="/dashboard">
                <ion-icon name="close-outline" style="position: fixed; top: 6rem; right: 37%; color: #dc3545; font-size: 3rem"></ion-icon>
            </router-link>
            <div class="menu_options">
                <h5 :class="{ selectedLink: active == 1 }" @click="showPage" data-tabno=1>Account</h5>
                <h5 :class="{ selectedLink: active == 2}" @click="showPage" data-tabno=2>General</h5>
                <h5 :class="{ selectedLink: active == 3}" @click="showPage" data-tabno=3>Password Reset</h5>
                <h5 :class="{ selectedLink: active == 4}" @click="showPage" data-tabno=4>Preferences</h5>
            </div>
            <div id="showMenu">
                <template v-if="active == 1">
                    <AccountSettings :username="user_data.username" :email="user_data.email_id" :phone="user_data.phone_no" />
                </template>
                <template v-else-if="active == 2">
                    <GeneralSettings @switchTheme="switchTheme" /> 
                </template>
                <template v-else-if="active == 3">
                    <PasswordReset />
                </template>
                <template v-else>
                    <UserPreferences /> 
                </template>
            </div>
            <span style="position: relative; bottom: -7rem; left: 0rem; font-size: 1rem;">* If a field does not change, please reload the page</span>
        </div>
    </div>
</template>

<style scoped>
h5 {
    cursor: pointer;
    background: none;
    border: none;
    transition: all 0.05s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

h5:hover {
  transform: scale(1.05);
}

h5:active {
  transform: scale(1.0);
}
.settings_header {
    font-weight: bold;
    margin: 1rem 1rem 1rem 1rem;
    position: fixed;
    top: 5rem;
}
.settings_container {
    min-width: 40rem;
    width: 44rem;
    height: 64rem;
    padding: 4rem;
    border-radius: 1rem;
    background-color: white;
    box-shadow: rgba(75, 77, 80, 0.2) 0px 8px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.menu_options {
    background: white;
    width: 40rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 1rem 1rem 4rem 1rem;
    position: fixed;
    top: 11rem;
    height: 5rem;
    border-radius: 1rem;
    box-shadow: rgba(75, 77, 80, 0.2) 0px 8px 24px;
}
#showMenu {
    margin: 10rem 0rem -2rem 0rem;
    width: 100%;
    
}
.selectedLink {
    color: #0d6efd;
    font-weight: bold;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script>

import AccountSettings from "./../components/AccountSettings.vue"
import GeneralSettings from "./../components/GSettings.vue"
import PasswordReset from "./../components/PasswordReset.vue"
import UserPreferences from "./../components/Preferences.vue"

export default {
    name: "Settings",
    components : {
        AccountSettings,
        GeneralSettings,
        PasswordReset,
        UserPreferences  
    },
    emits: ["switchTheme"],
    data() {
        return {
            active : 1,
            user_data : {}
        }
    },
    methods : {
        getUserData() {
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const user_id = localStorage.getItem("user_id");
            const auth_token = localStorage.getItem("user_access_token");
            const url = `${BASE_API_URL}/api/user/${user_id}`;
            console.log(url);
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
                this.user_data = data
            })
            .catch(err => console.log(err))
        },
        showPage(e) {
            e.preventDefault();
            e.stopPropagation();
            const v = e.target.dataset.tabno;
            this.active = v;
            console.log("CLICKED", v);
        },
        switchTheme(data) {
            console.log("DATA FROM SETTINGS PAGE : ", data);
            this.$emit("switchTheme", data);
        },
        updateUser(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // {
            //     "theme" : "dark",
            //     "color_palette" : "blue",
            //     "report_format" : "pdf",
            //     "export_format" : "csv",
            //     "reminders" : "on",
            //     "reminder_frequency" : "2d"
            // }
        }
    },
    created() {
        setTimeout(() => {
            this.getUserData();
        }, 500)
    }
}
</script>