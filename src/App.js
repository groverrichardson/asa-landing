import React from 'react';
import './styles/index.css';
import 'tailwindcss/tailwind.css';
import Hero from './components/hero';
import SellingPoints from './components/selling-points';
import Contact from './components/contact';

function App() {
    return (
        <main className="App flex flex-row flex-wrap">
            <Hero />
            <SellingPoints />
            <Contact />
            <footer className="flex flex-row w-screen h-20 bg-blueGrey text-white font-work justify-center items-center text-center p-5">
                American Solar Advantage © 2021 All rights reserved
            </footer>
        </main>
    );
}

export default App;
