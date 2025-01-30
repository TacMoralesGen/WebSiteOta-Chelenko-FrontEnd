import React from 'react';

function AdditionalInfo({ formData, handleChange }) {
    return (
        <>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Información Adicional</label>
                <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
            </div>

            <div className="form-check mb-3">
                <input
                    type="checkbox"
                    id="terminos"
                    name="terminos"
                    className="form-check-input"
                    checked={formData.terms}
                    onChange={handleChange}
                    required
                />
                <label className="form-check-label" htmlFor="terminos">
                    He leído y acepto los términos & condiciones
                </label>
            </div>
        </>
    );
}

export default AdditionalInfo;