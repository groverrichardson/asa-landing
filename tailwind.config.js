module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#0D4399',
                secondary: '#FCA102',
            },
            backgroundImage: {
                'hero-image': 'src/assets/hero.jpeg',
            },
            fontFamily: {
                work: ['Work Sans', 'sans-serif'],
            },
            zIndex: {
                '-10': '-10',
                '-20': '-20',
            },
            maxHeight: {
                max: '800px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
