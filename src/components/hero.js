import React from 'react';
import Logo from '../assets/asa-logo-2021.svg';
import Cta from './cta';
import HeroImg from '../assets/hero.jpeg';

function Hero() {
    return (
        <section className="hero-section-container bg-cover flex flex-row flex-wrap relative mobileS:mb-48 iPadPro:mb-0 w-full iPadPro:overflow-hidden justify-center items-center">
            <header className="flex items-center justify-between px-5 py-2 w-full self-start">
                <img
                    src={Logo}
                    alt="American Solar Advantage"
                    className="h-24"
                />
                <Cta visibility="invisible laptop:visible" />
            </header>
            <section className="hero-container flex flex-row py-0 items-center justify-center flex-wrap iPad:flex-1 iPadPro:flex-nowrap iPadPro:h-96">
                <div className="hero-copy-container w-full px-12 pt-6 pb-12 relative overflow-x-hidden flex flex-col justify-center items-center iPadPro:px-12 laptopM:px-20 laptopHD:px-48 iPadPro:static">
                    <div className="hero-header container max-w-xl">
                        <h1 className="hero-header whitespace-pre-wrap text-4xl iPhoneX:text-5xl iPad:text-4xl laptopM:text-5xl text-primary font-work tracking-tighter font-bold ">
                            Quality you can trust,{' '}
                            <span className="text-tertiary">solar</span> you can
                            depend on.
                        </h1>
                        <div className="decorative-line h-2 bg-gradient-to-r from-secondary to-tertiary mt-2 absolute w-screen -z-10 iPadPro:w-3/4"></div>
                    </div>
                    <p className="hero-copy mt-6 font-work font-semi-bold tracking-tight text-lg text-black xl:text-lg max-w-xl">
                        We install beautiful residential solar on your home with
                        care so that you can enjoy the benefits of affordable
                        electricity.
                    </p>
                    <div className="cta-container mt-10 max-w-xl w-full">
                        <Cta margin="mt-10" position="iPadPro:self-start" />
                    </div>
                </div>
                <div className="hero-img-container w-full object-cover object-left flex flex-column justify-center items-center relative">
                    <img
                        src={HeroImg}
                        alt="Residential home with solar panels installed"
                        className="hero-img object-cover object-right xl:object-left h-72 flex-1 w-3/4 shadow-xl absolute border-4 border-white p-5 z-40 iPadPro:self-start"
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
