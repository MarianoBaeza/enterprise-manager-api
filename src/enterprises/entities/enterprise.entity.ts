import { EnterpriseTypeEnum } from '@prisma/client';

export class Enterprise {
  id: string;
  name: string;
  description: string;
  type: EnterpriseTypeEnum;
  transfers: string[];
  createdAt: Date;
  updatedAt: Date;
}
