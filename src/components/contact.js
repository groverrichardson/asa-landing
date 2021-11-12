import { Button, TextField } from '@mui/material';
import React from 'react';

function Contact() {
    return (
        <form className="Contact p-10 w-full overflow-x-hidden relative flex flex-col justify-center items-center">
            <div className="form-content-container max-w-xl flex flex-col justify-center items-center">
                <div className="header-container">
                    <header className="form-header text-3xl iPhoneX:text-4xl iPad:text-3xl font-work font-bold text-primary tracking-tighter laptopM:text-5xl">
                        Get a Free Quote
                    </header>
                    <div className="decorative-line h-2 bg-gradient-to-r from-secondary to-tertiary mt-2 absolute self-start w-full -z-10"></div>
                    <p className="contact-copy py-5 ont-work font-semi-bold tracking-tight text-lg text-black xl:text-lg">
                        Please fill out the form below and one of our ASA
                        representatives will contact you shortly.
                    </p>
                </div>
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    required
                    className="name-input"
                    sx={{ width: '100%' }}
                />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    className="email-input"
                    required
                    sx={{ marginTop: '10px', width: '100%' }}
                />
                <TextField
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
                    className="phone-input"
                    required
                    sx={{ marginTop: '10px', width: '100%' }}
                />
                <TextField
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                    className="address-input"
                    sx={{ marginTop: '10px', width: '100%' }}
                />
            </div>
            <button className="bg-gradient-to-r from-secondary to-tertiary md:w-auto p-3 text-center text-lg iPhone:text-2xl iPad:text-xl font-bold text-white font-work shadow-md rounded mt-4 w-full iPad:w-full max-w-xl">
                Submit
            </button>
        </form>
    );
}

export default Contact;
