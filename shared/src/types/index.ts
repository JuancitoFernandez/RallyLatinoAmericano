export interface Alert {
  id: string;
  service: 'medicina' | 'policia' | 'bombero';
  message: string;
  timestamp: string;
  status: 'pending' | 'active' | 'resolved';
}
