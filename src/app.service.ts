import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Another one bites the dust';
  }
  
  wasKannIchFurSieTun(): string {
    return 'Nichts';
  }
}
