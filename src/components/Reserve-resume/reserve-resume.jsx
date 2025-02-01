const ReserveResume = () => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Resumen de la Reserva</h4>
          <ul className="list-unstyled text-start">
            <li>
              <strong>Cabaña:</strong>
              <div>#1 Tiny Cabin (Familiar)</div>
            </li>
            <hr />

            <li>
              <strong>Fecha de reserva:</strong>
              <div className="row">
                <div className="col-md-6">
                  <strong>Entrada:</strong>
                  <div>Lunes, 06 Enero, 2025 desde las 15:00hrs</div>
                </div>
                <div className="col-md-6">
                  <strong>Salida:</strong>
                  <div>Miércoles, 08 Enero, 2025 hasta las 10:00am</div>
                </div>
              </div>
            </li>

            <div className="mt-3">
              Duración total de la estadía:
              <div>
                <strong> 2 noches</strong>
              </div>
            </div>

            <hr />

            <li>
              <strong>Total de Huespedes:</strong>
            </li>
            <ul>
              <li>
                <strong>Adultos:</strong> 2
              </li>
              <li>
                <strong>Niños:</strong> 1
              </li>
            </ul>
            <hr />

            <div className="mt-4 text-center">
              <button type="button" className="btn btn-success opacity-50">
                Confirmar reserva
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReserveResume;
