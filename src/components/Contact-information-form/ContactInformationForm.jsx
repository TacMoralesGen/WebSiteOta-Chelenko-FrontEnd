
import React, { useState, useEffect } from 'react';
import PersonalInfo from './PersonalInfo';
import LocationInfo from './LocationInfo';
import AdditionalInfo from './AdditionalInfo';


function ContactInformationForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        otherCountry: '',
        message: '',
        terms: false,
    });

    const [isValid, setIsValid] = useState(false);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateForm = () => {
        const nameRange = /^[a-zA-Z\s]+$/;
        const phoneRange = /^[0-9]+$/;
        const isNameValid = nameRange.test(formData.name);
        const isPhoneValid = phoneRange.test(formData.phone);
        setIsValid(isNameValid && isPhoneValid && formData.terms);
    };

    useEffect(() => {
        validateForm();
    }, [formData]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isValid) {
            alert('Formulario enviado con éxito');
            setFormData({
                name: '',
                email: '',
                phone: '',
                country: '',
                otherCountry: '',
                message: '',
                terms: false,
            });
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-left">
                <div className="col-md-8">
                    <div className="card p-4">
                        <h1 className="mb-4">Datos de contacto</h1>
                        <form id="contactForm" className="needs-validation" noValidate onSubmit={handleSubmit}>
                            <PersonalInfo formData={formData} handleChange={handleChange} />
                            <LocationInfo formData={formData} handleChange={handleChange} />
                            <AdditionalInfo formData={formData} handleChange={handleChange} />
                            <button type="submit" className="btn btn-success w-100" disabled={!isValid}>
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInformationForm;