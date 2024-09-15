<template>
  <button
    class="bg-head_blue text-white py-[6px] px-3 rounded-[4.27px] text-[13px] hover:bg-hover hover:text-text_color transition duration-200"
  >
    <slot> </slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>
