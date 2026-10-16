import { Injectable } from '@nestjs/common';

@Injectable()
export class BomberoService {
  private alerts: any[] = [];

  findAll() {
    return this.alerts;
  }

  create(data: any) {
    const alert = { id: Date.now().toString(), service: 'bombero', ...data };
    this.alerts.push(alert);
    return alert;
  }
}
