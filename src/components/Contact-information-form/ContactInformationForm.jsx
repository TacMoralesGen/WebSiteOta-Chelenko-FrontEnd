
import React, { useState, useEffect } from 'react';
import PersonalInfo from './PersonalInfo';
import LocationInfo from './LocationInfo';
import AdditionalInfo from './AdditionalInfo';
import { createContact } from "./api";

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

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.name.trim().match(/^[a-zA-Z\s]+$/)) {
            newErrors.name = 'Por favor, ingresa tu nombre.';
        }
        if (!formData.email.includes('@')) {
            newErrors.email = 'Por favor, ingresa un correo válido.';
        }
        if (!formData.phone.match(/^[0-9]+$/)) {
            newErrors.phone = 'El teléfono debe contener solo números.';
        }
        if (!formData.terms) {
            newErrors.terms = 'Debes aceptar los términos y condiciones.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Devuelve `true` si no hay errores
    };

    useEffect(() => {
        if (isSubmitted) validateForm();
    }, [formData, isSubmitted]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);

        if (validateForm()) {
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
            setIsSubmitted(false);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-left">
                <div className="col-md-8">
                    <div className="card p-4">
                        <h1 className="mb-4">Datos de contacto</h1>
                        <form
                            id="contactForm"
                            className={`needs-validation ${isSubmitted ? 'was-validated' : ''}`}
                            noValidate
                            onSubmit={handleSubmit}
                        >
                            <PersonalInfo formData={formData} handleChange={handleChange} errors={errors} />
                            <LocationInfo formData={formData} handleChange={handleChange} />
                            <AdditionalInfo formData={formData} handleChange={handleChange} />

                            <div className="form-check mb-3">
                                <input
                                    type="checkbox"
                                    id="terminos"
                                    name="terms"
                                    className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}
                                    checked={formData.terms}
                                    onChange={handleChange}
                                    required
                                />
                                <label className="form-check-label" htmlFor="terminos">
                                    He leído y acepto los términos & condiciones
                                </label>
                                {errors.terms && <div className="invalid-feedback">{errors.terms}</div>}
                            </div>

                            <button type="submit" className="btn btn-success w-100">
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