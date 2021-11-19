import {
    Autocomplete,
    Button,
    filledInputClasses,
    TextField,
} from '@mui/material';
import MuiPhoneNumber from 'material-ui-phone-number';
import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState(false);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [error, setError] = useState(false);
    const [displaySuccess, setDisplaySuccess] = useState(false);

    function formValidation() {
        setNameError(false);
        setEmailError(false);
        setPhoneError(false);
        setError(false);

        if (!name) {
            setNameError(true);
        }
        if (!email) {
            setEmailError(true);
        }
        if (!phone || phone.length !== 17) {
            setPhoneError(true);
        }

        if (nameError === true || emailError === true || phoneError === true) {
            setError(true);
            console.log('this ran');
            return false;
        } else {
            setError(false);
            return true;
        }
    }

    function handleSubmit(e) {
        setError(false);
        e.preventDefault();
        formValidation();

        if (!error && phone.length === 17) {
            setDisplaySuccess(true);
        }
    }

    let states = [
        'Alaska',
        'Alabama',
        'Arkansas',
        'American Samoa',
        'Arizona',
        'California',
        'Colorado',
        'Connecticut',
        'District of Columbia',
        'Delaware',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Iowa',
        'Idaho',
        'Illinois',
        'Indiana',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Massachusetts',
        'Maryland',
        'Maine',
        'Michigan',
        'Minnesota',
        'Missouri',
        'Mississippi',
        'Montana',
        'North Carolina',
        ' North Dakota',
        'Nebraska',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'Nevada',
        'New York',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Virginia',
        'Virgin Islands',
        'Vermont',
        'Washington',
        'Wisconsin',
        'West Virginia',
        'Wyoming',
    ];

    return (
        <form
            className="Contact p-10 w-full overflow-x-hidden relative flex flex-col justify-center items-center"
            onSubmit={(e) => {
                setError(false);
                console.log(error);
                handleSubmit(e);
            }}>
            <div className="form-content-container max-w-xl flex flex-col justify-center items-center">
                <div className="header-container">
                    <header className="form-header text-3xl iPhoneX:text-4xl iPad:text-3xl font-work font-bold text-primary tracking-tighter laptopM:text-5xl">
                        Get a Free Quote
                    </header>
                    <div className="decorative-line h-2 bg-gradient-to-r from-secondary to-tertiary mt-2 absolute self-start w-full -z-10"></div>
                    <p className="contact-copy py-5 font-work font-semi-bold tracking-tight text-lg text-black xl:text-lg">
                        Please fill out the form below and one of our ASA
                        representatives will contact you shortly.
                    </p>
                    {error === true && displaySuccess === false ? (
                        <p className="error-message mb-3 font-work text-red-700">
                            Please fill out all required fields.
                        </p>
                    ) : (
                        ''
                    )}
                    {displaySuccess === true ? (
                        <p className="error-message mb-3 font-work text-primary font-bold text-2xl tracking-tight py-5">
                            We have received your request. Someone will be in
                            contact with you shortly.
                        </p>
                    ) : (
                        ''
                    )}
                </div>
                {displaySuccess === true ? (
                    ''
                ) : (
                    <div className="fields">
                        <TextField
                            id="outlined-name"
                            label="Name"
                            variant="outlined"
                            required
                            className="name-input"
                            sx={{ width: '100%' }}
                            onChange={(e) => {
                                setNameError(false);
                                setName(e.target.value);
                            }}
                            error={nameError}
                        />
                        <TextField
                            id="outlined-email"
                            label="Email"
                            variant="outlined"
                            className="email-input"
                            required
                            sx={{ marginTop: '10px', width: '100%' }}
                            onChange={(e) => {
                                setEmailError(false);
                                setEmail(e.target.value);
                            }}
                            error={emailError}
                        />
                        <MuiPhoneNumber
                            defaultCountry={'us'}
                            sx={{
                                border: '1px lightgray solid',
                                width: '100%',
                                padding: '17px 14px 17px 14px',
                                marginTop: '10px',
                                borderRadius: '5px',
                            }}
                            onChange={(e) => {
                                setPhoneError(false);
                                setPhone(e);
                            }}
                        />
                        {phoneError ? (
                            <p className="phone-error text-red-700 font-work text-md pb-2 pt-3">
                                Please enter a valid phone number.
                            </p>
                        ) : (
                            ''
                        )}
                        <div className="address-fields w-full">
                            <TextField
                                id="outlined-basic"
                                label="Address"
                                variant="outlined"
                                className="address-input"
                                sx={{ marginTop: '10px', width: '100%' }}
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}
                            />
                            <TextField
                                id="outlined-basic"
                                label="City"
                                variant="outlined"
                                className="address-input"
                                sx={{ marginTop: '10px', width: '100%' }}
                                onChange={(e) => {
                                    setCity(e.target.value);
                                }}
                            />
                            <Autocomplete
                                disablePortal
                                id="states"
                                options={states}
                                renderInput={(params) => (
                                    <TextField {...params} label="State" />
                                )}
                                sx={{ marginTop: '10px', width: '100%' }}
                                onChange={(e, newValue) => {
                                    setState(newValue);
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
            <button
                type="submit"
                className="bg-gradient-to-r from-secondary to-tertiary md:w-auto p-3 text-center text-lg iPhone:text-xl iPad:text-xl font-bold text-white font-work shadow-md rounded mt-4 w-full iPad:w-full max-w-xl">
                Submit
            </button>
        </form>
    );
}

export default Contact;
