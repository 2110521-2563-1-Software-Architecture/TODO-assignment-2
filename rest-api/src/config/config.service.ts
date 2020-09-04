import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private getEnv(name: string): string {
    return process.env[name];
  }

  get mongoUri(): string {
    return this.getEnv('MONGO_URI') || 'mongodb://localhost:27017/assignment-1';
  }
}
