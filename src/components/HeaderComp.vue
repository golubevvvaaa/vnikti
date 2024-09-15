<template>
  <header
    class="z-20 w-full top-0 left-0 flex justify-center items-center bg-white border-b-[1px] border-border z-2 h-[55px] xl:h-[70px]"
  >
    <div
      class="flex flex-nowrap flex-row justify-center items-center space-x-[18.2%] xl:space-x-[19.5%]"
    >
      <img
        src="/src/assets/img/menu.svg"
        alt="menu"
        class="inline-block cursor-pointer w-[40px] xl:w-[50px]"
        @click="$emit('toggle-menu')"
      />
      <img src="/src/assets/img/logo.svg" alt="logo" class="inline-block w-[12%] xl:w-[9%]" />
      <button
        type="button"
        class="bg-head_blue text-white py-[6px] px-3 xl:py-[8px] xl:px-4 rounded-[4.27px] font-normal font-sans hover:bg-[#185DC650] hover:text-text_color transition duration-200 text-[13px] xl:text-[15px]"
      >
        Выход
        <img src="/src/assets/img/icon-exit.svg" alt="icon-exit" class="inline-block text-wrap" />
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>
