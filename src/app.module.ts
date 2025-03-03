import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { DealsModule } from './deals/deals.module';

@Module({
  imports: [DatabaseModule, UsersModule, CustomersModule, DealsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
