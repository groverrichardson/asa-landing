import { Autocomplete, TextField, FormControl } from '@mui/material';
import MuiPhoneNumber from 'material-ui-phone-number';
import React, { useState } from 'react';
import { phone } from 'phone';
import validator from 'validator';

function Contact() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [phone_number, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState(false);
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [postalError, setPostalError] = useState(false);
    const [displaySuccess, setDisplaySuccess] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        if (!validator.isEmail(email)) {
            setEmailError(true);
        } else if (!phone(phone_number).isValid) {
            setPhoneError(true);
        } else if (!validator.isPostalCode(postalCode, 'any')) {
            setPostalError(true);
        } else {
            formatPhone();
            sendToProposalTool();
        }
    }

    function sendToProposalTool() {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        const raw = JSON.stringify({
            name: name,
            email: email,
            phone: phone_number,
            notes: '',
            address: address,
            city: city,
            state: state,
            postalCode: postalCode,
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };

        fetch(
            'https://proposal.asa.solar/api/v1/proposals?sendEmail=leadSubmission',
            requestOptions
        )
            .then((response) => response.text())
            .then((result) => console.log(result))
            .then(() => setDisplaySuccess(true))
            .catch((error) => console.log('error', error));
    }

    function formatPhone() {
        let validNumber = phone(phone_number).phoneNumber;
        let formattedNumber =
            validNumber.slice(2, 5) +
            '-' +
            validNumber.slice(5, 8) +
            '-' +
            validNumber.slice(8);
        setPhone(formattedNumber);
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
                    {displaySuccess === true ? (
                        <p className="success-message mb-3 font-work text-primary font-bold text-2xl tracking-tight py-5">
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
                    <div className=" w-full">
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
                                setEmailError(false);
                                setEmail(e.target.value);
                            }}
                            error={emailError}
                        />
                        {emailError ? (
                            <p className="phone-error-message font-work text-red-700 mt-2">
                                Please enter a valid email address.
                            </p>
                        ) : (
                            ''
                        )}
                        <TextField
                            required
                            id="outlined-phone"
                            label="Phone"
                            variant="outlined"
                            className="phone-input"
                            sx={{ marginTop: '10px', width: '100%' }}
                            error={phoneError}
                            onChange={(e) => {
                                setPhoneError(false);
                                setPhone(e.target.value);
                            }}
                        />
                        {phoneError ? (
                            <p className="phone-error-message font-work text-red-700 mt-2">
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
                                sx={{
                                    marginTop: '10px',
                                    width: '100%',
                                }}
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}
                            />
                            <TextField
                                id="outlined-city"
                                label="City"
                                variant="outlined"
                                className="address-input"
                                sx={{
                                    marginTop: '10px',
                                    width: '100%',
                                }}
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
                                sx={{
                                    marginTop: '10px',
                                    width: '100%',
                                }}
                                onChange={(e, newValue) => {
                                    setState(newValue);
                                }}
                            />
                            <TextField
                                required
                                id="outlined-postal"
                                label="Postal Code"
                                variant="outlined"
                                className="address-input"
                                sx={{
                                    marginTop: '10px',
                                    width: '100%',
                                }}
                                error={postalError}
                                onChange={(e) => {
                                    setPostalError(false);
                                    setPostalCode(e.target.value);
                                }}
                            />
                            {postalError ? (
                                <p className="postal-error-message font-work text-red-700 mt-2">
                                    Please enter a valid postal code.
                                </p>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                )}
            </div>
            <div className="submit-button-container max-w-xl w-full">
                <button
                    type="submit"
                    className="bg-gradient-to-r from-secondary to-tertiary md:w-full p-3 text-center text-lg iPhone:text-xl iPad:text-xl font-bold text-white font-work shadow-md rounded mt-4">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default Contact;
