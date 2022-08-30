/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ["./**/*.{razor,html,cshtml}"],
    theme: {
        extend: {
            fontFamily: {
                'gugi': ['Gugi'],
                'oxanium': ['Oxanium']
            }
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            primary: '#3CB54A',
            background: '#3A4F48',
            tertiary: '#35E6AE',
            white: '#FFFFFF',
            grey: '#ADADAD',
            black: '#000000'
        }
    },
    variants: {
        extend: {
            backgroundColor: ['even'],
        }
    },
    plugins: [],
}
