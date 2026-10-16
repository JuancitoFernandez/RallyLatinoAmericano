import React, { useState } from 'react';
import ButtonPanel from '../components/common/ButtonPanel/ButtonPanel';
import MedicinaPanel from '../components/medicina/MedicinaPanel';
import PoliciaPanel from '../components/policia/PoliciaPanel';
import BomberoPanel from '../components/bombero/BomberoPanel';

type ServiceType = 'medicina' | 'policia' | 'bombero';

const Dashboard: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceType | null>(null);

  return (
    <div className="dashboard">
      {/* Botonera lateral */}
      <aside className="sidebar">
        <ButtonPanel activeService={activeService} onSelect={setActiveService} />
      </aside>

      {/* Área principal con las 3 secciones */}
      <main className="panels-area">
        <MedicinaPanel />
        <PoliciaPanel />
        <BomberoPanel />
      </main>
    </div>
  );
};

export default Dashboard;
