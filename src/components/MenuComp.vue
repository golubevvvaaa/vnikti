<template>
  <div
    class="absolute pl-5 left-0 z-[99] w-1/4 h-[calc(100vh-55px)] bg-white shadow-xl shadow-gray-400 border-r-[1px] border-border"
  >
    <div class="flex items-center -ml-6 p-6 border-b-[1px] border-border py-2">
      <img
        src="@/assets/img/icon-close.svg"
        alt="icon-close"
        @click="closeMenu"
        class="cursor-pointer ml-0 z-10"
        style="width: 24px; height: 24px"
      />
      <span class="font-sans text-[17px] font- ml-[15px]">Меню</span>
    </div>
    <div class="flex items-center py-2 ml-1">
      <img
        class="py-2 inline-block"
        src="@/assets/img/Avatar.png"
        alt="Avatar"
        style="width: 28px"
      />
      <div class="inline-block pl-3">
        <span class="text-[13px] font-normal font-sans text-wrap">Елизавета Голубева</span>
        <span class="-mt-1 font-sans font-normal text-border text-[12px] block"
          >Доп. информация</span
        >
      </div>
    </div>
    <div class="bg-blue1 text-white w-full py-0.5 flex">
      <h1 class="font-semibold pl-[12px] font-sans">Коксовые камеры</h1>
    </div>
    <PartOfMenu />
  </div>
</template>

<script>
import PartOfMenu from './PartOfMenu.vue'

export default {
  name: 'MenuComp',
  components: {
    PartOfMenu
  },
  methods: {
    closeMenu() {
      this.$emit('close-menu') // Отправляем событие наверх
    }
  }
}
</script>
