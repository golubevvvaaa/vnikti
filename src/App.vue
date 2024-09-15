<template>
  <div
    class="absolute inset-0 bg-background h-screen w-screen bg-center bg-cover overflow-x-hidden"
  >
    <div class="relative">
      <HeaderComp v-if="$route.name !== 'EnterPage'" @toggle-menu="toggleMenu" />
      <MenuComp v-if="isMenuOpen" @close-menu="closeMenu" />
    </div>
  </div>
  <div class="flex justify-center"><router-view /></div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import MenuComp from './components/MenuComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    MenuComp
  },
  data() {
    return {
      isMenuOpen: false // Управляем состоянием меню
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen // Переключаем состояние
    },
    closeMenu() {
      this.isMenuOpen = false // Закрыть меню при клике на крестик
    }
  }
}
</script>
