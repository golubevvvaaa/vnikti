<template>
  <div class="mb-4">
    <label :for="id" class="block text-[13px] font-normal text-gray-700 mb-2">{{ label }}</label>
    <input
      :id="id"
      type="text"
      :placeholder="placeholder"
      class="w-[330px] px-3 py-1.5 border text-[13px] border-border rounded-[3px] focus:outline-none focus:border-head_blue"
      v-model="inputValue"
      @input="$emit('update:modelValue', inputValue)"
    />
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      inputValue: this.modelValue
    }
  },
  watch: {
    modelValue(newValue) {
      this.inputValue = newValue
    }
  }
}
</script>
