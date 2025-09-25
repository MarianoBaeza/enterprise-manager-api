import { EnterpriseTypeEnum } from '@prisma/client';
import { Transfer } from 'src/transfers/entities/transfer.entity';

export class Enterprise {
  id: string;
  name: string;
  description: string | null;
  type: EnterpriseTypeEnum;
  transfers: Transfer[];
  createdAt: Date;
  updatedAt: Date;
}
