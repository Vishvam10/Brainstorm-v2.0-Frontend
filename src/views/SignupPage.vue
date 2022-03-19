<template>
    <div class="bg">
        <div class="login d-flex flex-column justify-content-center align-items-center">
            <h1 class="fw-bold mb-5">Sign Up</h1>
            <div class="input-group input-group-sm mb-3 d-flex flex-column justify-content-center">
                <form id="signupForm">
                    <div class="row mb-3">
                        <label for="email" class="mb-3" style="transform: translateX(-8px)" placeholder="sample_name@gmail.com">Email ID</label>
                        <input type="email" name="email" class="form-control form-control-lg" id="email">
                    </div>
                    <div class="row mb-3">
                        <label for="phone" class="mb-3" style="transform: translateX(-8px)" placeholder="xxxxxxxxxx">Phone No</label>
                        <input type="tel" name="phone" class="form-control form-control-lg" id="phone">
                    </div>
                    <div class="row mb-3">
                        <label for="username" class="mb-3" style="transform: translateX(-8px)" placeholder="sample_123">Username</label>
                        <input type="text" name="username" class="form-control form-control-lg" id="username">
                    </div>
                    <div class="row mb-3">
                        <label for="password" class="mb-3" style="transform: translateX(-8px)">Password</label>
                        <input type="password" name="password" class="form-control form-control-lg" id="password">
                    </div>
                    <div class="row mb-3 mt-5">
                        <input type="submit" name="submit" value="Login" class="form-control form-control-lg btn btn-primary">
                    </div>
                    <div style="margin: 2rem 0rem -3rem -10.5rem; display: flex; flex-direction: row; justify-content: center; width: 100%;">
                        <p style="margin: 0rem 0rem 0rem 1rem; font-size: 1.2rem;">Have an account ?</p>
                        <router-link to="/login" style="margin: 0rem 0rem 0rem 1rem; font-size: 1.2rem;">Login</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
