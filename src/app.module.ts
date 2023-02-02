import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { configurationService } from './config/config.service';
import { UserModule } from './modules/user/user.module';
import { MessagesModule } from './modules/messages/messages.module';
import { RoomsModule } from './modules/rooms/rooms.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(configurationService.getTypeOrmConfig(__dirname)),
    MailerModule.forRoot(configurationService.getNodeMailerConfig()),
    UserModule,
    MessagesModule,
    RoomsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
