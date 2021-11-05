import React from 'react';
import SolarInstall from '../assets/solar-install.jpeg';

function SellingPoints() {
    return (
        <section className="SellingPoints flex flex-column flex-wrap justify-center iPhone-portrait:mt-72">
            <div className="main-selling-container flex flex-row flex-wrap-reverse relative">
                <div className="background-install-container absolute h-96 -z-10 -bottom-96 bg-secondary">
                    <img
                        src={SolarInstall}
                        alt="Solar installers installing solar panels on a residential home"
                        className="background-image-installer object-cover opacity-20 iPhone-portrait:max-h-96 iPhone-portrait:w-full"
                    />
                </div>
                <div className="selling-bullet-points px-10">
                    <div className="bullet-point py-10 relative">
                        <h1 className="bullet-header text-4xl font-work font-bold text-primary tracking-tighter">
                            Quality Installations
                        </h1>
                        <div className="bullet-decorative-line border-l-8 border-secondary h-decorative1 iPhone-portrait:h-decorative1iphone top-decorative1 absolute"></div>
                        <p className="selling-description font-work tracking-tight pl-5 pt-2">
                            Whether you purchased with us or you’re working with
                            one of our preferred partners, we pride ourselves on
                            quality installs. We’ll do our best to maintain
                            provide you with securely installed equipment while
                            maintaining the quality of your roof.
                        </p>
                    </div>
                    <div className="bullet-point py-10 relative">
                        <h1 className="bullet-header text-4xl font-work font-bold text-primary tracking-tighter">
                            Exceptional Customer Service
                        </h1>
                        <div className="bullet-decorative-line border-l-8 border-quaternary h-decorative2 top-decorative2 iPhone-portrait:h-decorative2iphone iPhone-portrait:top-decorative2iphone absolute"></div>
                        <p className="selling-description font-work tracking-tight pl-5 pt-2">
                            From start to finish, we keep you in the loop.
                            Regular updates are provided each step of the way.
                            But if you need additional information, you can call
                            or text our customer support line and get an update
                            quickly.
                        </p>
                    </div>
                    <div className="bullet-point py-10 relative">
                        <h1 className="bullet-header text-4xl font-work font-bold text-primary tracking-tighter">
                            Need a Battery? No Problem.
                        </h1>
                        <div className="bullet-decorative-line border-l-8 border-secondary h-decorative3 top-decorative3 iPhone-portrait:h-decorative3iphone iPhone-portrait:top-decorative3iphone absolute"></div>
                        <p className="selling-description font-work tracking-tight pl-5 pt-2">
                            Save some of your extra power for a rainy day. We
                            don't just provide solar panels. We also sell and
                            install solar batteries. We're your one-stop for all
                            things solar!
                        </p>
                    </div>
                </div>
            </div>
            <img
                src={SolarInstall}
                alt="Solar installers installing solar panels on a residential home"
                className="h-72 w-3/4 border-4 mt-12 border-white p-5 object-cover"
            />
        </section>
    );
}

export default SellingPoints;
