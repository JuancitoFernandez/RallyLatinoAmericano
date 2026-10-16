import React from 'react';

const BomberoPanel: React.FC = () => {
  return (
    <div className="service-panel bombero-panel">
      <div className="panel-header">
        <span className="panel-icon">🚒</span>
        <h2>Bombero</h2>
      </div>
      <div className="panel-body">
        {/* Contenido de la interfaz de Bombero */}
        <p>Panel de emergencias de bomberos</p>
      </div>
    </div>
  );
};

export default BomberoPanel;
