<script>
export default {
  name: "Login_Page",
  data() {
    return {
      walletAddress: "",
      about: "",
    };
  },
  methods: {
    handleLogin() {
      console.log("Вход:", this.walletAddress, this.about);
      // Здесь можно добавить логику для авторизации
    },
  },
};
</script>

<template>
  <div class="Login_Page">
    <h2>Вход</h2>
    <div class="underline"></div>
    <form @submit.prevent="handleLogin">
      <div class="input-group">
        <input type="text" placeholder="Адрес TON Кошелька" v-model="walletAddress" />
      </div>
      <div class="input-group">
        <textarea placeholder="О себе" v-model="about"> я твою маму ебал</textarea>
      </div>
      <button type="submit">Войти</button>
    </form>
  </div>
</template>


<style scoped>
.Login_Page {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  background-color: #000;
  height: 100vh;
  justify-content: center;
  font-family: Arial, sans-serif;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  margin-bottom: 5px;
}

.underline {
  width: 50px;
  height: 2px;
  background-color: #7c2ae3; /* Цвет линии */
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
}

.input-group {
  width: 100%;
  margin-bottom: 15px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #7c2ae3;
  background-color: #000;
  color: #fff;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  resize: none;
}

input::placeholder,
textarea::placeholder {
  color: #666;
}

button {
  width: 100%;
  padding: 10px;
  border: 1px solid #7c2ae3;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #7c2ae3;
}
</style>
