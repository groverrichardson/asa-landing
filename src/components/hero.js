import React from 'react';
import Logo from '../assets/asa-logo-2021.svg';
import Button from './button';
import HeroImg from '../assets/hero.jpeg';

function Hero() {
    return (
        <section className="hero-section-container bg-cover flex flex-row flex-wrap md:max-h-96 relative mobileS:mb-48 iPhone:mb-20">
            <header className="flex items-center justify-between px-5 py-2 w-full self-start">
                <img
                    src={Logo}
                    alt="American Solar Advantage"
                    className="h-24"
                />
                <Button visibility="invisible sm:visible" />
            </header>
            <section className="hero-container flex flex-row py-0 content-center justify-center flex-wrap md:flex-1 md:py-5">
                <div className="hero-copy-container w-full md:w-1/2 px-12 pt-6 pb-12 md:px-12 md:py-0 lg:p-24 relative md:static overflow-x-hidden">
                    <h1 className="hero-header whitespace-pre-wrap text-4xl lg:text-5xl text-primary font-work tracking-tighter font-bold">
                        Quality you can trust,{' '}
                        <span className="text-tertiary">solar</span> you can
                        depend on.
                    </h1>
                    <div className="decorative-line h-2 bg-secondary mt-2 absolute w-screen md:w-3/4 -z-10"></div>
                    <p className="hero-copy mt-6 font-work font-semi-bold tracking-tight text-lg text-black xl:text-lg">
                        We install beautiful residential solar on your home with
                        care so that you can enjoy the benefits of affordable
                        electricity.
                    </p>
                    <Button margin="mt-10" />
                </div>
                <div className="hero-img-container w-full md:w-1/2 object-cover object-left flex flex-column justify-center items-center relative">
                    <img
                        src={HeroImg}
                        alt="Residential home with solar panels installed"
                        className="object-cover object-right xl:object-left h-72 flex-1 md:flex-none md:mt-0 md:h-96 w-3/4 shadow-xl absolute md:static border-4 border-white p-5"
                    />
                    <img
                        src={HeroImg}
                        alt="Residential home with solar panels installed"
                        className="hero-bg-image"
                    />
                </div>
            </section>
        </section>
    );
}

export default Hero;
