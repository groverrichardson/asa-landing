import { TextField } from '@mui/material';
import React from 'react';

function Contact() {
    return (
        <form className="Contact p-10 w-full overflow-x-hidden relative flex flex-col justify-center items-center">
            <div className="form-content-container max-w-xl flex flex-col justify-center items-center">
                <div className="header-container">
                    <header className="form-header text-3xl iPhoneX:text-4xl font-work font-bold text-primary tracking-tighter">
                        Get a Free Quote
                    </header>
                    <div className="decorative-line h-2 bg-gradient-to-r from-secondary to-tertiary mt-2 absolute self-start w-full md:w-3/4 -z-10"></div>
                    <p className="contact-copy py-5 ont-work font-semi-bold tracking-tight text-lg text-black xl:text-lg">
                        Etiam porta sem malesuada magna mollis euismod. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et.
                    </p>
                </div>
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    className="name-input"
                    sx={{ width: '100%' }}
                />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    className="email-input"
                    sx={{ marginTop: '10px', width: '100%' }}
                />
                <TextField
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
                    className="phone-input"
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
        </form>
    );
}

export default Contact;
