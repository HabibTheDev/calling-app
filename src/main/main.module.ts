import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/app/database/database.module';
import { HealthModule } from 'src/app/modules/shared/health/health.module';

console.log(process.env.MONGO_URI);
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    HealthModule,
  ],
})
export class MainModule {}
