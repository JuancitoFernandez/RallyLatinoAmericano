import React from 'react';
import './ButtonPanel.css';

interface Props {
  activeService: 'medicina' | 'policia' | 'bombero' | null;
  onSelect: (service: 'medicina' | 'policia' | 'bombero') => void;
}

const ButtonPanel: React.FC<Props> = ({ activeService, onSelect }) => {
  return (
    <div className="button-panel">
      <button
        id="btn-medicina"
        className={`panel-btn btn-medicina ${activeService === 'medicina' ? 'active' : ''}`}
        onClick={() => onSelect('medicina')}
        title="Medicina"
      >
        <span className="btn-icon">🏥</span>
        <span className="btn-label">Medicina</span>
      </button>

      <button
        id="btn-policia"
        className={`panel-btn btn-policia ${activeService === 'policia' ? 'active' : ''}`}
        onClick={() => onSelect('policia')}
        title="Policía"
      >
        <span className="btn-icon">🚔</span>
        <span className="btn-label">Policía</span>
      </button>

      <button
        id="btn-bombero"
        className={`panel-btn btn-bombero ${activeService === 'bombero' ? 'active' : ''}`}
        onClick={() => onSelect('bombero')}
        title="Bombero"
      >
        <span className="btn-icon">🚒</span>
        <span className="btn-label">Bombero</span>
      </button>
    </div>
  );
};

export default ButtonPanel;
