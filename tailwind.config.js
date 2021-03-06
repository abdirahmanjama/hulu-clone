module.exports = {
    mode: 'jit', //enables justintime for tailwindcss builds
    content: [
        // './public/**/*.html',
        // './src/**/*.{js,jsx,ts,tsx,vue}',
        './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {},
    },
    plugins: [require('tailwind-scrollbar-hide')],
}