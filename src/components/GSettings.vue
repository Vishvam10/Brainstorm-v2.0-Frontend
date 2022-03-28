<template>
    <h3 class="mb-5" style="margin: 0rem 0rem 0rem -1rem important;">General ( Under Development )</h3>
    <div class="input-group input-group-sm mb-3 d-flex flex-column justify-content-center" style="margin: 0rem 0rem 0rem -1rem;">
        <form id="generalSettings">
            <h6 class="mb-4">Dark Mode ( Reload required ) </h6>
            <div class="row mb-4">
                <div class="form-check form-switch">
                    <input class="form-check-input mb-3" style="transform: translate(-0.2rem, -0.4rem)" type="checkbox" id="themeSwitch" @change="themeSwitcher">
                </div>
            </div>
            <h6 class="mb-2">Color Scheme ( Reload required )  </h6>
            <div class="row mb-3">
                <div class="theme_container">
                    <input class="form-check-input" type="radio" name="color_palette" value="red">
                    <label class="form-check-label" style="transform: translateX(-8px)"> Red</label>
                    <input class="form-check-input" type="radio" name="color_palette" value="blue" selected>
                    <label class="form-check-label" style="transform: translateX(-8px)"> Blue</label>
                    <input class="form-check-input" type="radio" name="color_palette" value="green" >
                    <label class="form-check-label" style="transform: translateX(-8px)"> Yellow</label>
                </div>
                <div class="theme_container">
                    <input class="form-check-input" type="radio" name="color_palette" value="green" >
                    <label class="form-check-label" style="transform: translateX(-8px)"> Green</label>
                    <input class="form-check-input" type="radio" name="color_palette" value="pink" >
                    <label class="form-check-label" style="transform: translateX(-8px)"> Pink</label>
                    <input class="form-check-input" type="radio" name="color_palette" value="teal" >
                    <label class="form-check-label" style="transform: translateX(-8px)"> Teal</label>
                </div>
                    
            </div>
            <div class="row mb-3 mt-5">
                <button class="form-control form-control-lg btn btn-primary" style="height: 4rem" @click="log">Save Changes</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
h6 {
    font-weight: bold;
    margin: 0rem 0rem 0rem -1rem;
}
.theme_container {
    display: flex;
    flex-direction: row;
    width: 100%; 
    justify-content : space-around; 
    align-items: center; 
    margin: 1rem 0rem 0rem -2rem;
}
#themeSwitch {
    height: 3rem;
    width: 6rem;
}
#generalSettings {
    margin: 0rem 0rem 0rem 2rem;
}
</style>

<script>
export default {
    name: "GeneralSettings",
    emits: ["switchTheme"],
    data() {
        return {
            darkTheme : false
        }
    }, 
    methods: {
        themeSwitcher() {
            this.darkTheme = !this.darkTheme
            this.$emit("switchTheme", this.darkTheme);
        }
    }
}
</script>