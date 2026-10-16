import { Injectable } from '@nestjs/common';

@Injectable()
export class MedicinaService {
  private alerts: any[] = [];

  findAll() {
    return this.alerts;
  }

  create(data: any) {
    const alert = { id: Date.now().toString(), service: 'medicina', ...data };
    this.alerts.push(alert);
    return alert;
  }
}
