import React from 'react';
import SolarInstall from '../assets/solar-install.jpeg';

function SellingPoints() {
    return (
        <section className="SellingPoints flex flex-row flex-wrap justify-center md:px-10 md:items-center">
            <div className="main-selling-container flex flex-row flex-wrap-reverse relative">
                <div className="selling-bullet-points px-10 py-5 iPhone-portrait:pt-0">
                    <div className="bullet-point py-5 relative">
                        <h1 className="bullet-header text-3xl font-work font-bold text-primary tracking-tighter">
                            Quality Installations
                        </h1>
                        <div className="bullet-copy-container flex flex-row pt-2">
                            <div className="bullet-decorative-line border-secondary border-4 h-auto mr-2"></div>
                            <p className="selling-description font-work tracking-tight">
                                Whether you purchased with us or you’re working
                                with one of our preferred partners, we pride
                                ourselves on quality installs. We’ll do our best
                                to maintain provide you with securely installed
                                equipment while maintaining the quality of your
                                roof.
                            </p>
                        </div>
                    </div>
                    <div className="bullet-point py-5 relative mt-10">
                        <h1 className="bullet-header text-3xl font-work font-bold text-primary tracking-tighter">
                            Exceptional Customer Service
                        </h1>
                        <div className="bullet-copy-container flex flex-row pt-2">
                            <div className="bullet-decorative-line border-quaternary border-4 h-auto mr-2"></div>
                            <p className="selling-description font-work tracking-tight">
                                From start to finish, we keep you in the loop.
                                Regular updates are provided each step of the
                                way. But if you need additional information, you
                                can call or text our customer support line and
                                get an update quickly.
                            </p>
                        </div>
                    </div>
                    <div className="bullet-point py-5 relative mt-10">
                        <h1 className="bullet-header text-3xl font-work font-bold text-primary tracking-tighter">
                            Need a Battery? No Problem.
                        </h1>
                        <div className="bullet-copy-container flex flex-row pt-2">
                            <div className="bullet-decorative-line border-secondary border-4 h-auto mr-2"></div>
                            <p className="selling-description font-work tracking-tight">
                                Save some of your extra power for a rainy day.
                                We don't just provide solar panels. We also sell
                                and install solar batteries. We're your one-stop
                                for all things solar!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="install-img-container flex flex-row justify-center items-center bg-tertiary">
                <img
                    src={SolarInstall}
                    alt="Solar installers installing solar panels on a residential home"
                    className="h-72 w-3/4 border-4 border-white p-5 object-cover md:w-1/2 md:h-96"
                />
                <img
                    src={SolarInstall}
                    alt="Solar installers installing solar panels on a residential home"
                    className="installer-bg-img"
                />
            </div>
        </section>
    );
}

export default SellingPoints;
