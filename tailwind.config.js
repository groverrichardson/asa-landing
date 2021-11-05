module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#0D4399',
                secondary: '#FCA102',
                tertiary: '#DB3A4A',
                quaternary: '#F7934C',
                grey: '#C8C8C8',
            },
            backgroundImage: {
                'hero-image': 'src/assets/hero.jpeg',
                installer: 'src/assets/solar-install.jpeg',
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
            height: {
                decorative1: '8.3rem',
                decorative1iphone: '3.8rem',
                decorative2: '8.3rem',
                decorative2iphone: '3.9rem',
                decorative3: '5.4rem',
                decorative3iphone: '2.4rem',
            },
            inset: {
                decorative1: '5.9rem',
                decorative2: '8.4rem',
                decorative2iphone: '5.8rem',
                decorative3: '8.4rem',
                decorative3iphone: '5.8rem',
            },
            screens: {
                'iPhone-portrait': { min: '750px' },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
