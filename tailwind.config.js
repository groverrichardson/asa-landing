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
                blueGrey: '#2F4858',
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
                iPad: '400px',
            },
            height: {
                decorative1: '12.7rem',
                decorative1iphone: '3.8rem',
                decorative2: '8.3rem',
                decorative2iphone: '3.9rem',
                decorative3: '6.8rem',
                decorative3iphone: '2.4rem',
                iPad: '615px',
            },
            inset: {
                decorative1: '8.4rem',
                decorative2: '8.4rem',
                decorative2iphone: '5.8rem',
                decorative3: '8.4rem',
                decorative3iphone: '5.8rem',
            },
            screens: {
                'iPhone-portrait': { min: '750px' },
                'iPad-landscape': { min: '810px' },
                galaxyFold: { min: '280px' },
                iPhone4: { min: '320px' },
                iPhoneX: { min: '375px' },
                iPhone12Pro: { min: '390px' },
                pixel2: { min: '411px' },
                iPad: { min: '768px' },
                iPadPro: { min: '1024px' },
                laptop: { min: '1024px' },
                laptopL: { min: '1440px' },
                ivK: { min: '2440px' },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
