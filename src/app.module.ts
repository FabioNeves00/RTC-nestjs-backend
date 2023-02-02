import { configurationService } from '@app/config';
import { MessagesModule, RoomsModule, UsersModule } from '@app/modules';
import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(configurationService.getTypeOrmConfig(__dirname)),
    MailerModule.forRoot(configurationService.getNodeMailerConfig()),
    MessagesModule,
    RoomsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
