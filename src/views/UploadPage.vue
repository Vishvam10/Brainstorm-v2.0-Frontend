<template>
     <div class="bg">
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
                    <h6 class="fw" style="position: relative; top: 0rem;  margin: 1rem 4rem 1rem 0rem">Allowed extensions : .csv, .xls, .xlsx</h6>
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