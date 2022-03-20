<template>
<div>
  <router-view></router-view>
</div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


export default {
name: 'App',
}

</script>

<style>
html {
/* Now, 1rem = 10px */
font-size: 63.5%;
}

body {
overflow-x: hidden;
}

a {
text-decoration: none;
list-style: none;
font-size: 1.6rem;
}

input {
height: 4rem;
}

input[type=radio] {
width: 2rem;
height: 2rem;
margin: 1rem 0rem 1rem 0rem;
}

option {
color: black;
font-size: 1.6rem;
border-radius: 1.2rem;
}

ion-icon {
  color: #0d6efd;
font-size: 2rem;
transition: all 0.1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
cursor: pointer;
}
ion-icon:hover {
transform: scale(1.1);
}
ion-icon:active {
transform: scale(1.0);
}

img {
box-shadow: rgba(75, 77, 80, .4) 0px 8px 24px;
}
.btn {
  transition: all 0.1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.btn:hover {
  transform: scale(1.05);
}

.btn:active {
  transform: scale(1.0);
}

.bg {    
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #00e1ff;
  background-image: linear-gradient(90deg, #00e1ff 0%, #001aff 100%);
} 

.dashboard {
  width: 120rem;
  height: 60rem;
  overflow-y: scroll;
  padding: 4rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: rgba(75, 77, 80, 0.2) 0px 8px 24px;
}


#head {
  background-color: white;
  box-shadow: rgba(75, 77, 80, 0.2) 0px 8px 24px;
  width: auto;
  height: 8rem;
  padding: 2rem;
  border-radius: 1rem;
}

#playButton {
  background-color: #1266F1;
  color: white;
  height: 4rem;
  border-radius: 1.2rem;
  width: 100%;
  margin: 3rem 0rem 0rem 0rem;
  transition: all .1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

#playButton:hover {
  transform: scale(1.05);
}
#playButton:active {
  transform: scale(1);
}

.reviewChip {
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: -1rem 0rem 0rem -1rem;
  height: 4rem;
  background-color: #F93154;
  color: #ebe4e4;
  border-radius: 1rem;
}

.add-deck {
  width: 80rem;
  min-height: auto;
  padding: 4rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: rgba(75, 77, 80, 0.2) 0px 8px 24px;
}

.login {
  width: 40rem;
  min-height: auto;
  padding: 4rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: rgba(75, 77, 80, 0.2) 0px 8px 24px;
}

.error-container {
  width: 40rem;
  min-height: auto;
  padding: 4rem;
  font-size: 2rem;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: white;
  box-shadow: rgba(75, 77, 80, 0.2) 0px 8px 24px;
}

.confirm_deletion {
  width: 40rem;
  min-height: auto;
  padding: 4rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: rgba(75, 77, 80, 0.2) 0px 8px 24px;
}

.deck-container {
  display: flex;
  flex-direction: row;
  height: 30rem;
  width: 100rem;
  overflow-x: auto;
  padding: 0rem 0rem 0rem 1rem;
}

.edit_deck {
  width: 84rem;
  min-height: auto;
  padding: 2rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: rgba(75, 77, 80, 0.2) 0px 8px 24px;
}

.edit_cards {
  width: 84rem;
  height: 60rem;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 2rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: rgba(75, 77, 80, 0.2) 0px 8px 24px;
}

.file_upload {
  width: 40rem;
  height: 20rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: rgba(75, 77, 80, 0.2) 0px 8px 24px;
}

#addMoreQA {
  margin: 3rem 0rem 1rem 1.5rem;
}

#inputContainer {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 16rem;
}

.deck-card {
  height: 24rem;
  width: 24rem;
  max-height: 24rem;
  min-height: 24rem;
  max-width: 24rem;
  min-width: 24rem;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.28) 0px 8px 18px;
  border-radius: 2rem;
  margin-right: 2rem;
  padding: 2rem;
}

.play {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

.icons {
  display: flex;
  flex-direction: row;
  width: 10rem;
  justify-content: space-evenly;
  margin: -0.4rem 0rem 4rem -2rem;
}

.submit_ctrl {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 6%;
}

.edit {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.hide {
  display: none;
}

.cardContainer {
  display: flex;
  flex-direction: row;
}

.qacard {
  height: 40rem;
  width: 40rem;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  padding: 8rem;
}

.button-wrapper {
  height: 4rem;
  width: 40rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 10%;
  left: 36;
}

.q_details {
  position: relative;
  top: -4rem;
  left: -2rem;
}

#showAnswer {
  border-radius: 1.2rem;
  background: #000; 
  height: 4rem; 
  width: 16rem; 
}

#nextBtn {
  border-radius: 1.2rem;
  border: 1px solid black;
  color: black;
  height: 4rem;
  width: 16rem;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

#nextBtn:hover {
  background-color: black;
  color: white;
}

#submitAll {
  display: none;
  background-color: black;
  color: white;
  width: 20rem;
  height: 6rem;
  font-size: 1.6rem;
  border-radius: 2rem;
  position: absolute;
  top: 44%;
  left: 44%;;
}


#back {
  display: none;
  background-color: transparent;
  border: 1px solid black;
  font-size: 1.6rem;
  color: black;
  position: relative;
  top: 100%;
  left: 18%;
  width: 20rem;
  height: 6rem;
  border-radius: 2rem;
  margin: 0rem 0rem 0rem -4rem;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  padding: 1.6rem 1rem 0rem 1rem;
}

#back:hover {
  background-color: black;
  color: white;
}

/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #b8b8b8  #ffffff;
  scrollbar-gutter: 2rem;
}   

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 16px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: #808080;
  border-radius: 16px;
  border: 6px solid #ffffff;
}
</style>
