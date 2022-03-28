<template>
    <h3 class="mb-5">Password Reset</h3>
    <div class="input-group input-group-sm mb-3 d-flex flex-column justify-content-center">
        <form id="resetPassword">
            <div class="row mb-3">
                <label for="current_password" class="mb-3" style="transform: translateX(-8px)">Enter Current Password</label>
                <input type="current_password" name="current_password" class="form-control form-control-lg" id="current_password">
            </div>
            <div class="row mb-3">
                <label for="reset_password" class="mb-3" style="transform: translateX(-8px)">Enter New Password</label>
                <input type="reset_password" name="reset_password" class="form-control form-control-lg" id="reset_password">
            </div>
            <div class="row mb-3">
                <label for="reset_password_confirmation" class="mb-3" style="transform: translateX(-8px)">Confirm Password</label>
                <input type="reset_password_confirmation" name="reset_password_confirmation" class="form-control form-control-lg" id="reset_password_confirmation">
                <div class="row mb-3 mt-5">
                    <button class="form-control form-control-lg btn btn-primary" style="height: 4rem" @click="resetPassword">Change Password</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "PasswordReset",
    methods : {
        validatePassword(password){
            var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            return re.test(password);
        },
        resetPassword(e) {
            e.preventDefault();
            e.stopPropagation();
            let form = new FormData(resetPassword);
            let d = {}
            for(var pair of form.entries()){
                d[pair[0]] = pair[1].trim();
            }
            
            console.log(d);
            if(this.validatePassword(d["current_password"]) && this.validatePassword(d["reset_password"])) {
                console.log("Please enter a password containing atleast 8 characters containing : lowercase and upper letters, alphanumeric and symbols. No spaces are allowed ");
                return;
            }
            if(d["reset_password"] != d["reset_password_confirmation"]) {
                console.log("The password confirmation does not match");
                return;
            }
            let data = {
                "current_password" : d["current_password"],
	            "new_password" : d["reset_password"]
            }
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const user_id = localStorage.getItem("user_id");
            const auth_token = localStorage.getItem("user_access_token");
            const url = `${BASE_API_URL}/api/password_reset/${user_id}`;
            console.log(url);
            fetch(url, {
                method: "POST",
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
    }
}
</script>