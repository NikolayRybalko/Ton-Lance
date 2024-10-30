<template>
  <div id="app">
    <header>
      <h1>Ton Lance еджен амы</h1>
      <p>Приветствуем в Telegram мини-приложении!</p>
    </header>
    <main>
      <router-view />
      <!-- Если используется vue-router для навигации -->
    </main>
    <router-link to="/login">Перейти к логину</router-link>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // Можно добавить базовые данные\
    };
  },
  methods: {
    
    initializeApp() {
      console.log("Приложение Ton Lance запущено!");
      // Telegram API
    },
  },
  mounted() {
    this.initializeApp();
  },
};
</script>

<style>
/* Базовые стили для Telegram мини-приложения */
#app {
  text-align: center;
  max-width: 480px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

header {
  margin-bottom: 20px;
}

h1 {
  font-size: 24px;
}

p {
  color: #666;
}
</style>
