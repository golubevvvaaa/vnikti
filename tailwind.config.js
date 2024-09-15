module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamimy: {
        sans: ['Arial', 'sans-serif']
      },
      colors: {
        head_blue: 'rgb(24, 93, 198)', // Основной синий цвет
        hover: 'rgba(24, 93, 198, 0.16)', // Цвет при наведении (с прозрачностью)
        border: 'rgba(129, 129, 129, 0.4)', // Обводка текстовых полей, недоступные кнопки
        text_color: 'rgb(0, 0, 0)', // Цвет текста
        white: 'rgb(255, 255, 255)', // Белый цвет
        blue1: 'rgb(107, 152, 219)' // Синий цвет для заголовков меню
      },
      screens: {
        xl: '1400px'
      },
      backgroundImage: {
        background: 'url(../assets/img/bg.png)'
      }
    }
  },
  plugins: []
}
