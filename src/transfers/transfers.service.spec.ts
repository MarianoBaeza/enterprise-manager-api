import { Test, TestingModule } from '@nestjs/testing';
import { TransfersService } from './transfers.service';
import { PrismaService } from '../prisma/prisma.service';

describe('TransfersService', () => {
  let service: TransfersService;
  let prisma: PrismaService;

  const mockTransfer = {
    id: '1',
    amount: 100,
    enterpriseId: 'ent1',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const prismaMock = {
    transfer: {
      create: jest.fn().mockResolvedValue(mockTransfer),
      findUnique: jest.fn().mockResolvedValue(mockTransfer),
      update: jest.fn().mockResolvedValue({ ...mockTransfer, amount: 200 }),
      delete: jest.fn().mockResolvedValue(mockTransfer),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransfersService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<TransfersService>(TransfersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create should return a transfer', async () => {
    const result = await service.create({ amount: 100, enterpriseId: 'ent1' });
    expect(result).toEqual(mockTransfer);
    expect(prisma.transfer.create).toHaveBeenCalled();
  });

  it('findOne should return a transfer', async () => {
    const result = await service.findOne('1');
    expect(result).toEqual(mockTransfer);
    expect(prisma.transfer.findUnique).toHaveBeenCalledWith({
      where: { id: '1' },
    });
  });

  it('update should update the transfer', async () => {
    const result = await service.update('1', { amount: 200 });
    expect(result.amount).toBe(200);
    expect(prisma.transfer.update).toHaveBeenCalled();
  });

  it('remove should delete the transfer', async () => {
    const result = await service.remove('1');
    expect(result).toEqual(mockTransfer);
    expect(prisma.transfer.delete).toHaveBeenCalledWith({ where: { id: '1' } });
  });
});
