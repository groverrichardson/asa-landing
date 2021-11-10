import React from 'react';
import 'tailwindcss/tailwind.css';
import Hero from './components/hero';
import SellingPoints from './components/selling-points';
import './styles/index.css';

function App() {
    return (
        <main className="App flex flex-row flex-wrap">
            <Hero />
            <SellingPoints />
        </main>
    );
}

export default App;
