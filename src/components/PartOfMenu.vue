<template>
  <div>
    <div class="flex items-center">
      <h1
        class="text-[15px] font-sans font-normal text-black py-3 cursor-pointer pl-[19px] -m-1.5"
        @click="toggleSubMenu"
      >
        АО 'Волгоград' УЗК 21-10/300 №56
      </h1>
      <img
        src="@/assets/img/IconArrowUp.svg"
        alt="IconArrowUp"
        @click="toggleSubMenu"
        class="cursor-pointer ml-5"
        :class="{ 'rotate-180': isSubMenuOpen }"
        style="width: 18px; height: 18px"
      />
    </div>
    <nav v-if="isSubMenuOpen" class="bg-white pt-0 pb-3 w-full">
      <router-link
        to="/Calculation"
        class="font-sans block pl-[23px] py-2 hover:bg-hover hover:duration-200"
        >Calculation</router-link
      >
      <router-link
        to="/Forecast"
        class="font-sans block pl-[23px] py-2 hover:bg-hover hover:duration-200"
        >Forecast</router-link
      >
      <router-link
        to="/Main"
        class="font-sans block pl-[23px] py-2 hover:bg-hover hover:duration-200"
        >Main</router-link
      >
      <router-link
        to="/Parameters"
        class="font-sans block pl-[23px] py-2 hover:bg-hover hover:duration-200"
        >Parameters</router-link
      >
      <router-link
        to="/Reports"
        class="font-sans block pl-[23px] py-2 hover:bg-hover hover:duration-200"
        >Reports</router-link
      >
      <router-link
        to="/Scan"
        class="font-sans block pl-[23px] py-2 hover:bg-hover hover:duration-200"
        >Scan</router-link
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: 'PartOfMenu',
  data() {
    return {
      isSubMenuOpen: false // Состояние подменю
    }
  },
  methods: {
    toggleSubMenu() {
      this.isSubMenuOpen = !this.isSubMenuOpen // Переключаем состояние подменю
    }
  }
}
</script>
