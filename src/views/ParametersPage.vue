<template>
  <div class="bg-white w-7/12 h-[calc(100vh-55px)] z-4 relative mt-[55px]">
    <h1 class="font-sans font-bold text-[16px] pt-[21px] pl-[25px]">
      АО 'Волгоград' УЗК 21-10/300 №56
    </h1>
    <div class="pl-[25px] pt-[13px]">
      <RadioButton
        label="Параметры установки"
        id="radio-1"
        name="group"
        value="1"
        v-model="selectedOption"
        class="mb-[10px]"
      />
      <RadioButton label="Гофры" id="radio-1" name="group" value="2" v-model="selectedOption" />
    </div>
    <!-- Условный контент в зависимости от выбранной радиокнопки -->
    <div v-if="selectedOption === '1'">
      <h1 class="font-sans font-bold text-[16px] pl-[25px]">Общая информация</h1>
      <div class="grid-container-2x2 pl-[25px] pt-[13px]">
        <TextField
          label="Предприятие"
          id="CompanyName"
          placeholder="Введите название предприятия..."
          v-model="CompanyName"
        />
        <TextField
          label="Установка"
          id="Plant"
          placeholder="Введите установку..."
          v-model="Plant"
        />
        <TextField
          class="-mt-3"
          label="Реактор"
          id="Plant"
          placeholder="Введите реактор..."
          v-model="Plant"
        />
        <TextField
          class="-mt-3"
          label="Год ввода в экспулатацию"
          id="Reactor"
          placeholder="Выберите год..."
          v-model="Reactor"
        />
      </div>
      <h1 class="font-sans font-bold text-[16px] pl-[25px]">Геометрические размеры реактора</h1>
      <div class="grid-container-1x1 pl-[25px] pt-[13px]">
        <TextField
          label="Внутренний диаметр D, мм"
          id="Value1"
          placeholder="Введите значение..."
          v-model="Value1"
        />
        <TextField
          label="Толщина стенки, мм"
          id="Value2"
          placeholder="Введите значение..."
          v-model="Value2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from '@/components/RadioButton.vue'
import TextField from '@/components/TextField.vue'

export default {
  name: 'ParametersPage',
  components: {
    RadioButton,
    TextField
  }
}
</script>
