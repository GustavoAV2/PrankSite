<template>
  <div class="display-flex-colum">
    <div class="box">
      <div class="display-flex">
        <p id="text">{{decryptedMessage}}</p>
      </div>
      
      <div class="buttons-container">
        <button @click="acceptMessage()">
          Sim
        </button>
        <button id="no">Não</button>
      </div>
    </div>
    
    <template v-if="isAccepted">
      <br/>
      <div class="img-div">
        <img src="../assets/Be.gif" alt="">
      </div>
    </template>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js';

export default {
  name: 'BoxComponent',
  data(){
    return {
      isAccepted: false,
      decryptedMessage: ""
    }
  },
  props: {
    msg: String
  },
  methods: {
    acceptMessage(){
      this.isAccepted = true;
      console.log(this.msg + "\nAprovado");
    },
    decryptPhrase(encryptedPhrase) {
      const bytes = CryptoJS.AES.decrypt(encryptedPhrase, 'chave_secreta');
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      return decrypted;
    }
  },
  mounted() {
    this.decryptedMessage = this.decryptPhrase(this.msg);

    let height = window.innerHeight - 50;
    let width = window.innerWidth - 50;
    let button = document.getElementById('no');

    button.addEventListener('mouseover', function() {
      button.style.position = "absolute";
      button.style.top = Math.random() * height + "px";
      button.style.left = Math.random() * width + "px";
    })
  }
}
</script>

<style scoped>
body{
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

a{
  text-decoration: none;
}
.display-flex{
  display: flex;
}
.display-flex-colum{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.box{
  font-size: 20px;
  color: white;
  height: 200px;
  width: 350px;
  border-radius: 10px;
  background: #191919;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
}
.buttons-container{
  display: flex;
  justify-content: center;
  height: 50px;
  width: 150px;
}
button{
  height: 50px;
  width: 70px;
  background: white;
  border-radius: 5px;
  color: blue;
  font-weight: 600;
  cursor: pointer;
}
#btnSave{
  width: 80px;
  height: 25px;
}
#inputBox{
  display: none;
}
p{
  margin: none;
  padding: none;
}
.hiddenButton{
  display: flex;
  cursor: text;
  padding: none;
  margin: none;
  background-color: #191919;
  border: none;
  box-shadow: none;
  text-shadow: none;
  width: 10px;
  height: 10px;
}
</style>
