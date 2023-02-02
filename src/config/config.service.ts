import { MailerOptions } from '@nestjs-modules/mailer';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

export class ConfigurationService {
  constructor(private env: { [k: string]: string | undefined }) {}

  public getValue(key: string, defaultValue?: string): string {
    const value = this.env[key];
    if (value === undefined && defaultValue === undefined) {
      throw new Error(`config error - missing env.${key}`);
    }

    if (value === undefined) {
      return defaultValue || '';
    }

    return value;
  }

  public isTest() {
    const mode = this.getValue('NODE_ENV');
    return mode === 'test';
  }

  public isProduction() {
    const mode = this.getValue('NODE_ENV');
    return mode === 'production';
  }

  public isDevelopment() {
    return !this.isProduction();
  }

  public getTypeOrmConfig(rootDir: string): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.getValue('POSTGRES_HOST'),
      port: parseInt(this.getValue('POSTGRES_PORT'), 10),
      username: this.getValue('POSTGRES_USER'),
      password: this.getValue('POSTGRES_PASSWORD'),
      database: this.getValue('POSTGRES_DATABASE'),
      migrationsTableName: 'migrations',
      autoLoadEntities: true,
      migrations: [
        join(rootDir, 'migration/*{.ts,.js}'),
        join(rootDir, 'src/migration/*{.ts,.js}'),
      ],
      synchronize: true,
    };
  }

  public getNodeMailerConfig(): MailerOptions {
    return {
      transport: {
        host: this.getValue('MAILER_HOST'),
        secure: false,
        auth: {
          user: this.getValue('MAILER_USER'),
          pass: this.getValue('MAILER_PASSWORD'),
        },
      },
      template: {
        dir: join(process.cwd(), 'src', 'views'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    };
  }
}

const configurationService = new ConfigurationService(process.env);

export { configurationService };
