import React from 'react';

const MedicinaPanel: React.FC = () => {
  return (
    <div className="service-panel medicina-panel">
      <div className="panel-header">
        <span className="panel-icon">🏥</span>
        <h2>Medicina</h2>
      </div>
      <div className="panel-body">
        {/* Contenido de la interfaz de Medicina */}
        <p>Panel de emergencias médicas</p>
      </div>
    </div>
  );
};

export default MedicinaPanel;
