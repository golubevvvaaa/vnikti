<template>
  <div class="flex items-center justify-center relative z-10 h-screen">
    <div
      class="relative bg-white rounded-[8.7px] flex flex-col items-center justify-center"
      style="width: 50vw; max-width: 600px; height: auto; padding: 2rem"
    >
      <div class="w-full flex justify-start mb-4 pl-7">
        <img
          src="C:\Users\mi\vnikti\src\assets\img\logo.svg"
          alt="Logo"
          class="max-w-full h-auto"
          style="width: 80%"
        />
      </div>
      <form class="w-full px-8" @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-left text-black mb-2">Логин</label>
          <input
            type="text"
            placeholder="Введите логин..."
            v-model="login"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-head_blue"
          />
        </div>
        <div class="mb-6">
          <label class="block text-left text-black mb-2">Пароль</label>
          <input
            type="password"
            placeholder="Введите пароль..."
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-head_blue"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-head_blue text-white p-3 rounded-lg font-semibold hover:bg-hover hover:text-text_color transition duration-200"
        >
          Войти
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .container {
    width: 80vw;
    max-width: 320px;
    padding: 1.5rem;
  }

  img {
    width: 70%;
  }
}
</style>

<script>
export default {
  name: 'EnterPage',
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      this.$router.push({ name: 'MainPage' })
    }
  }
}
</script>
