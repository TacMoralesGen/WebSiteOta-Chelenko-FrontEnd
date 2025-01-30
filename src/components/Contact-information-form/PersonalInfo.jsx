import React from 'react';

function PersonalInfo({ formData, handleChange }) {
    return (
        <>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre *</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <div className="invalid-feedback">Por favor, ingresa tu nombre.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico *</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <div className="invalid-feedback">Por favor, ingresa un correo válido.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Teléfono *</label>
                <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <div className="invalid-feedback">Por favor, ingresa tu número de teléfono.</div>
            </div>
        </>
    );
}

export default PersonalInfo;