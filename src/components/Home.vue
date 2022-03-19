<template>
     <div class="home">
        <nav>
            <img src="/static/images/logo-light.png" alt="Brainstorm Logo" class="logo" style="position: absolute; left: 3%;">
            <router-link to="/login" style="color: white; position: absolute; right: 24rem;">Login</router-link>
            <router-link to="/signup" style="color: white; position: absolute; right: 8rem;">Sign Up</router-link>
        </nav>
        <div class="row">
            <section class="p-header">
                <!-- <h4 class="header-text">Welcome to</h4> -->
                <h1 class="heading create">Create a Deck,</h1>
                <h1 class="heading playAndReview">Play and</h1>
                <h1 class="heading remember">Remember Stuff</h1>
                <div class="row" style="margin: 8rem 0rem 2rem 0rem">
                    <div class="col-6">
                        <div class="customButton signUpButton">Sign Up</div>
                    </div>
                    <div class="col-6">
                        <div class="customButton loginButton">Login</div>
                    </div>
                </div>
                <p class="header-details">Brainstorm is a flashcard app that will boost your memory and make you remember important things quickly. </p>
            </section>
        </div>
        <div class="row">
            <section class="features">
                <div class="row">
                    <h1 style="font-weight: bold; font-size: 8rem; margin: 0rem 0rem 4rem 36rem;">Features</h1>
                </div>
                <div class="row features-row" style="background: linear-gradient(to right, rgb(79, 172, 254), rgb(0, 242, 254));">
                    <div class="col-8">
                        <img src="/static/images/create-deck.png" alt="Create Deck" style="width: 50rem; height: 40rem; border-radius: 2rem;">
                    </div>
                    <div class="col-4">
                        <div style="margin: 0rem 0rem 0rem -5rem;">
                            <h2 class="features-heading">Create a Deck</h2>
                            <p class="features-details">With just one click of button, you can create a custom deck !</p>
                            <p class="features-details">This can have a custom name and can hold unlimited questions</p>
                        </div>
                    </div>
                </div>
                <div class="row features-row" style="background: linear-gradient(to right, rgb(9, 150, 206), rgb(56, 249, 215));">
                    <div class="col-4">
                        <div style="width: 20rem;">
                            <h2 class="features-heading">Play</h2>
                            <p class="features-details">In every turn, you get a random flashcard from the deck. Try to recollect the correct answers ! </p>
                        </div>
                    </div>
                    <div class="col-8">
                        <img src="/static/images/play.png" alt="Play" style="width: 40rem; height: 40rem; border-radius: 2rem; margin: 0rem 0rem 0rem 28rem;">
                    </div>
                </div>
                <div class="row features-row" style="background: linear-gradient(to right, rgb(42, 245, 152), rgb(13, 173, 101));">
                    <div class="col-8">
                        <img src="/static/images/performance1.png" alt="Performance" style="width: 28rem; height: 40rem; border-radius: 2rem;">
                    </div>
                    <div class="col-4">
                        <div style="width: 20rem;">
                            <h2 class="features-heading" style="margin: 0rem 0rem 1rem -6rem;">Performance Analysis</h2>
                            <p class="features-details" style="margin: 2rem 1rem 1rem -5.6rem;">Get a report of your overall scores. This includes average and the standard deviation of it. You also get a recommendation for revising certain decks.</p>
                        </div>
                    </div>
                </div>
                <div class="row features-row" style="background: linear-gradient(to right, rgb(15, 216, 80), rgb(249, 240, 71)); ">
                    <div class="col-4">
                        <div style="width: 20rem; margin:-1.6rem 0rem 0rem 6rem">
                            <h2 class="features-heading" style="margin: 0rem 0rem 1rem -6rem;">Deck-Wise Analysis</h2>
                            <p class="features-details" style="margin: 2rem 1rem 1rem -5.6rem;">Get a graphical view of your deck-wise perfomance and focus on improving on the harder decks</p>
                        </div>
                    </div>
                    <div class="col-8">
                        <img src="/static/images/performance2.png" alt="Deck Wise Analysis" style="width: 64rem; height: 40rem; border-radius: 2rem; margin: 0rem 0rem 0rem 3rem;">
                    </div>
                </div>
                <div class="row features-row" style="background: linear-gradient(to right, rgb(246, 211, 101), rgb(253, 160, 133));">
                    <div class="col-8">
                        <img src="/static/images/edit-deck.png" alt="Edit Deck" style="width: 50rem; height: 30rem; border-radius: 2rem;">
                    </div>
                    <div class="col-4">
                        <div style="width: 20rem; margin: -2rem 0rem 0rem 0rem;">
                            <h2 class="features-heading" style="margin: 0rem 0rem 2rem -7rem; transform: translateY(0.3rem);">Deck Management</h2>
                            <p class="features-details" style="margin: 1rem 1rem 1rem -6.6rem;">You have full freedom ! You can create, update and delete cards and decks as and when you require.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="row">
            <section class="try-now">
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <h1 class="heading create">Try Now !</h1>
                    <h2 class="heading dim">It is free after all</h2>
                    <h4 class="heading dim2">Yep, you read it right. It is free. Hop In !</h4>
                    <router-link to="/signup" class="customButton signUpButton" style="margin: 4rem 0rem 16rem 0rem;">Sign Up</router-link>
                </div>
            </section>
        </div>
        <div id="home-footer">
            Developed with ❤ by <span class="fw-bold" style="margin: 1rem 0rem 1rem 0.6rem;">Vishvam S</span>
        </div>
    </div>
</template>

<style>
    .logo {
        width: 10rem; 
        height: 2rem;
        box-shadow: none;
    }

    .home {
        padding: 4rem;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: black;
        width: 100vw;
    }

    .p-header {
        position: relative;
        top: 12rem;
        width: 50rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .header-text {
        font-size: 4rem;
        font-weight: bold;
        color: black;
        margin: 1rem 1rem -1rem 0rem;
    }

    .heading {
        font-size: 10rem;
        font-weight: bold;
    }

    .create {
        background-image: linear-gradient(90deg, #00e1ff 0%, #001aff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0rem 0rem 1rem 1rem;
    }

    .playAndReview {
        background: linear-gradient(to top, rgb(55, 236, 186), rgb(114, 175, 211));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0rem 8rem 1rem 0rem;
    }

    .remember {
        background: linear-gradient(to right, rgb(11, 163, 96), rgb(60, 186, 146));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0rem 0rem 0rem 3rem;
    }

    .header-details {
        margin: 4rem 0rem 0rem 0rem;
        font-size: 2rem;
        width: 72rem;
        color: gray;
        text-align: center;
    }

    .customButton {
        width: 18rem;
        height: 6rem;
        border-radius: 1.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        transition: all 0.1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        margin: 0rem 6rem 0rem 0rem;
    }

    .customButton:hover {
        transform: scale(1.05);
    }

    .customButton:active {
        transform: scale(1.0);
    }

    .signUpButton {
        background-color: white;
        color: black;
    }
    .signUpButton:hover {
        background-color: white;
        color: black;
    }

    .loginButton {
        border: 0.5px solid white;
        color: white;
    }
    .loginButton:hover {
        border: 0.5px solid white;
        color: white;
    }

    .features {
        position: relative;
        top: 26rem;
        left: -2%;
    }

    .features-row {
        margin: 4rem 0rem 8rem 0rem; 
        padding: 4rem;
        border-radius: 2rem;
        box-shadow: rgba(75, 77, 80, .2) 0px 8px 24px;
    }

    .features-heading {
        font-size: 6.4rem;
        font-weight: bold;
        margin: 0rem 0rem 2rem 0rem;
    }

    .features-details {
        font-size: 2rem;
        color: black
    }

    .try-now {
        position: relative;
        top: 12rem;
        width: 50rem;
        margin: 12rem 10rem 4rem 0rem;
    }

    .dim {
        font-size: 2rem;
        color: gray;
        margin: 2rem 0rem 1rem 0rem;
    }

    .dim2 {
        margin: 0rem 0rem 4rem 0rem;
        color: gray;
        font-size: 2rem;
        font-weight: normal;
    }

    #home-footer {
        width: 100%;
        height: 16rem;
        position: absolute;
        bottom: -16rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background: rgb(36, 36, 36);
        font-size: 2rem;
    }

    #footer {
        position: absolute;
        bottom: 1.5rem;
        left: 43%;
        font-size: 1.6rem;
        color: black;
    }
</style>