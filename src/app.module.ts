import { Module } from '@nestjs/common';
import { EnterprisesModule } from './enterprises/enterprises.module';
import { TransfersModule } from './transfers/transfers.module';

@Module({
  imports: [EnterprisesModule, TransfersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
