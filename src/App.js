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
        </main>
    );
}

export default App;
