<template>
    <h3 class="mb-5">Account Settings</h3>
    <div class="input-group input-group-sm mb-3 d-flex flex-column justify-content-center">
        <form id="accountSettings">
            <div class="row mb-3">
                <label for="username" class="mb-3" style="transform: translateX(-8px)">Username</label>
                <input type="text" name="user_name" class="form-control form-control-lg" id="username" :value="username">
            </div>
            <div class="row mb-3">
                <label for="email" class="mb-3" style="transform: translateX(-8px)">Email ID</label>
                <input type="email" name="email_id" class="form-control form-control-lg" id="email" :value="email">
            </div>
            <div class="row mb-3">
                <label for="phone" class="mb-3" style="transform: translateX(-8px)">Phone No</label>
                <input type="tel" name="phone_no" class="form-control form-control-lg" id="phone" :value="phone">
            </div>
            <div class="row mb-3 mt-5">
                <button class="form-control form-control-lg btn btn-primary" style="height: 4rem" @click="updateUserDetails">Save Changes</button>
            </div>
        </form>
        <div class="row mb-3 mt-5">
            <button class="btn btn btn-danger" style="height: 4rem" @click="deleteUser">Delete Account</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "AccountSettings",
    props: ["username", "email", "phone"],
    methods : {
        validateEmail(s) {
            var re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
            return String(s).search(re) == -1;
        },
        validatePhone(s) {     
            var re = /^[0-9]+$/;
            return !re.test(s);
        },
        updateUserDetails(e) {
            e.preventDefault();
            e.stopPropagation();
            let form = new FormData(accountSettings);
            let data = {}
            for(var pair of form.entries()){
                data[pair[0]] = pair[1].trim();
            }
            
            console.log(data["email_id"]);
            if(this.validateEmail(data["email_id"])) {
                console.log("Please enter a valid email address");
                return;
            }
            if(this.validatePhone(data["phone_no"])) {
                console.log("Please enter a valid phone no");
                return;
            }

            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const user_id = localStorage.getItem("user_id");
            const auth_token = localStorage.getItem("user_access_token");
            const url = `${BASE_API_URL}/api/user/${user_id}`;
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
        },
        deleteUser(e) {
            const user_name = localStorage.getItem("user_name")
            const res = prompt("Are you sure ? If yes, please enter your username to confirm");
            if(user_name == res) {
                const BASE_API_URL = document.getElementById("base_api_url").textContent;
                const user_id = localStorage.getItem("user_id")
                const url = `${BASE_API_URL}/api/user/${user_id}`;
                const auth_token = localStorage.getItem("user_access_token");

                fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${auth_token}`,
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                })
                .then(res => res.json())
                .then(data => {
                    if(data["status"] == 200) {
                        console.log("DELETED SUCCESSFULLY");
                        this.$router.push({ name: 'login' }) 
                    }
                })
                .catch(err => console.log(err))
            }
        }
            
    }
}
</script>