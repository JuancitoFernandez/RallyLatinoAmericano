import { Injectable } from '@nestjs/common';

@Injectable()
export class PoliciaService {
  private alerts: any[] = [];

  findAll() {
    return this.alerts;
  }

  create(data: any) {
    const alert = { id: Date.now().toString(), service: 'policia', ...data };
    this.alerts.push(alert);
    return alert;
  }
}
