<template>
     <div class="bg">
        <span style="visibility: hidden" id="base_api_url">{{BASE_API_URL}}</span>
        <span style="visibility: hidden" id="deck_id">{{$route.params.deck_id}}</span>
        <div class="file_upload">
            <div style="margin: 1rem 0rem 0rem 0rem">
                <span class="d-flex justify-content-center align-items-center flex-row">
                    <h3 class="fw-bold" style="position: relative; top: -0.6rem; margin: 0rem -1rem 3rem 0rem">File Upload</h3>
                    <router-link to="/dashboard">
                        <ion-icon name="close-outline" style="position: relative; right: -11.6rem; top: -1.9rem;"></ion-icon>
                    </router-link>
                </span>
                <span class="d-flex justify-content-center align-items-center flex-column">
                    <input class="form-control form-control-lg" id="file" type="file" @change="logger">
                    <h6 class="fw" style="position: relative; top: 0rem;  margin: 1rem 4rem 2rem 0rem">Allowed extensions : .csv, .xls, .xlsx</h6>
                    <button class="btn btn-success btn-lg" style="margin: 1rem 3rem 1rem 3rem; height: 4rem; width: 20.3rem; display: flex; align-items: center; justify-content: center;" type="button" @click="submitHandler">Submit</button>
                </span>
            </div>
        </div>
     </div>
</template>

<script>
export default {
    name: "Upload",
    methods: {
        logger(e) {
            console.log("CHANGED", e.target.files);
        },
        submitHandler(e) {
            e.preventDefault();
            e.stopPropagation();
            const BASE_API_URL = document.getElementById("base_api_url").textContent;
            const deck_id = document.getElementById("deck_id").textContent;
            const url = `${BASE_API_URL}/api/upload`;
            const auth_token = localStorage.getItem("user_access_token");
            const uploaded_file = document.getElementById("file").files[0];
            const extension = uploaded_file.name.split('.').pop();
            const ALLOWED_EXTENSIONS = ["csv", "xlsx", "xlx"]
            console.log("URL : ", url);
            if(ALLOWED_EXTENSIONS.includes(extension)) {
                const form = new FormData();
                form.append("File", uploaded_file);
                form.append("deck_id", deck_id);
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${auth_token}`,
                        'Access-Control-Allow-Origin': '*',
                    },
                    body: form
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
                .catch(err => console.log(err))
            }

        }
    }
}
</script>

<style scoped>
ion-icon {
    color: #dc3545;
}
#file {
    height: 1rem;
    width: 20rem;
}
</style>