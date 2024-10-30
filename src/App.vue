<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <header>
      <h1>Ton Lance еджен амы</h1>
      <p>Приветствуем в Telegram мини-приложении!</p>
    </header>
    <main>
      <RouterView />
      <!-- Если используется vue-router для навигации -->
    </main>
    <router-link to="/login">Перейти к логину</router-link>
  </div>
</template>

<style scoped>
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
