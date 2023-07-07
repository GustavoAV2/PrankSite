<template>
  <div class="container">
    <div class="box">
      <label for="">Frase:</label>
      <input v-model="phrase" type="text" >
      <button @click="getEncryptedURL()">Criar link</button>
      <p>{{ this.url }}</p>
    </div>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js';

export default {
  name: 'HomePage',
  data(){
    return {
      message: false,
      phrase: "",
      url: "Nenhuma URL criada"
    }
  },
  methods: {
    getEncryptedURL() {
      if (this.phrase.length > 0){
        let encryptedPhrase = this.encryptPhrase(this.phrase);
        let endpoint = `question/${encodeURIComponent(encryptedPhrase)}`
        // let url = 'http://localhost:8000/' + endpoint;
        this.$router.push(endpoint);
      }
    },
    encryptPhrase(phrase) {
      const encrypted = CryptoJS.AES.encrypt(phrase, 'chave_secreta').toString();
      return encrypted;
    }
  }
}
</script>

<style>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
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
</style>
