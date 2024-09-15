<template>
  <div
    class="bg-white w-7/12 h-[calc(100vh-55px)] z-4 relative mt-[55px] flex flex-col items-center justify-center"
  >
    <div class="flex flex-col justify-center items-center">
      <h1 class="font-semibold font-sans text-[23px] pb-0">Ничего не выбрано</h1>
      <span class="pb-4">Выберите в меню необходимую коксовую камеру</span>
      <BaseButton @click="$emit('toggle-menu')" class="font-normal block">Открыть меню</BaseButton>
    </div>
  </div>
</template>
<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'MainPage',
  components: {
    BaseButton
  }
}
</script>
