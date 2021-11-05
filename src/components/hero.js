import React from 'react';
import Logo from '../assets/asa-logo-2021.svg';
import Button from './button';
import HeroImg from '../assets/hero.jpeg';

function Hero() {
    return (
        <section className="bg-cover flex flex-row flex-wrap h-screen md:max-h-96 relative mb-48">
            <header className="flex items-center justify-between px-5 py-2 w-full self-start">
                <img
                    src={Logo}
                    alt="American Solar Advantage"
                    className="h-24"
                />
                <Button visibility="invisible sm:visible" />
            </header>
            <section className="flex flex-row content-center justify-center flex-wrap md:flex-1 md:py-5">
                <div className="hero-copy-container w-full md:w-1/2 p-12 md:px-12 md:py-0 lg:p-24 relative md:static overflow-x-hidden">
                    <h1 className="whitespace-pre-wrap text-5xl text-primary font-work tracking-tighter font-bold">
                        Quality you can trust,{' '}
                        <span className="text-tertiary">solar</span> you can
                        depend on.
                    </h1>
                    <div className="decorative-line h-2 bg-secondary mt-2 absolute w-screen md:w-3/4 -z-10"></div>
                    <p className="mt-6 font-work tracking-tighter xl:text-lg">
                        We install beautiful residential solar on your home with
                        care so that you can enjoy the benefits of affordable
                        electricity.
                    </p>
                    <Button margin="mt-10" />
                </div>
                <div className="w-full md:w-1/2 object-cover object-left flex flex-column justify-center content-center">
                    <img
                        src={HeroImg}
                        alt="Residential home with solar panels installed"
                        className="object-cover object-right xl:object-left h-72 flex-1 md:flex-none mt-12 md:mt-0 md:h-96 w-3/4 shadow-xl absolute md:static border-4 border-white p-5"
                    />
                </div>
            </section>
            <div className="background-img-container bg-primary h-96 md:h-iPad lg:h-screen md:w-1/2 md:absolute -z-20 -bottom-48 md:bottom-auto md:right-0 max-h-max">
                <img
                    src={HeroImg}
                    alt="Residential home with solar panels installed"
                    className="object-cover object-left h-full opacity-10"
                />
            </div>
        </section>
    );
}

export default Hero;
