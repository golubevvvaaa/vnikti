<template>
  <div class="flex items-center mb-4">
    <input
      :id="id"
      type="radio"
      :value="value"
      :name="name"
      class="w-4 h-4 text-head_blue bg-gray-100 border-border focus:outline-none"
      @input="$emit('update:modelValue', value)"
      :checked="modelValue === value"
    />
    <label :for="id" class="ms-2 text-sm font-normal text-black">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'RadioButton',
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      required: false
    }
  }
}
</script>
