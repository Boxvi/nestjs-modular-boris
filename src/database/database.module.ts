import { Global, Module } from '@nestjs/common';

const API_KEY_DEV = 'YGZH2K4M5N';
const API_KEY_PROD = 'accfcb6e2fc44f45a2b706db3d3b75f5';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY_DEV,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
