import React from 'react';

const PoliciaPanel: React.FC = () => {
  return (
    <div className="service-panel policia-panel">
      <div className="panel-header">
        <span className="panel-icon">🚔</span>
        <h2>Policía</h2>
      </div>
      <div className="panel-body">
        {/* Contenido de la interfaz de Policía */}
        <p>Panel de emergencias policiales</p>
      </div>
    </div>
  );
};

export default PoliciaPanel;
