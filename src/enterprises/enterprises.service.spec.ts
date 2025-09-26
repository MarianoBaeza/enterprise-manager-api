import { Test, TestingModule } from '@nestjs/testing';
import { EnterprisesService } from './enterprises.service';
import { PrismaService } from '../prisma/prisma.service';
import { EnterpriseTypeEnum } from '@prisma/client';

describe('EnterprisesService', () => {
  let service: EnterprisesService;
  let prisma: PrismaService;

  const mockPrisma = {
    enterprise: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EnterprisesService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<EnterprisesService>(EnterprisesService);
    prisma = module.get<PrismaService>(PrismaService);

    // Limpiar mocks antes de cada test
    jest.clearAllMocks();
  });

  it('debería crear una empresa', async () => {
    const dto = { name: 'TestCorp', type: EnterpriseTypeEnum.CORPORATE };
    const created = { id: '1', ...dto };
    mockPrisma.enterprise.create.mockResolvedValue(created);

    const result = await service.create(dto);
    expect(result).toEqual(created);
    expect(mockPrisma.enterprise.create).toHaveBeenCalledWith({ data: dto });
  });

  it('debería encontrar todas las empresas', async () => {
    const enterprises = [{ id: '1', name: 'A', type: 'SME' }];
    mockPrisma.enterprise.findMany.mockResolvedValue(enterprises);

    const result = await service.findAll();
    expect(result).toEqual(enterprises);
  });

  it('debería encontrar una empresa por id', async () => {
    const enterprise = { id: '1', name: 'A', type: 'SME' };
    mockPrisma.enterprise.findUnique.mockResolvedValue(enterprise);

    const result = await service.findOne('1');
    expect(result).toEqual(enterprise);
  });

  it('debería actualizar una empresa', async () => {
    const updateDto = { name: 'Updated' };
    const updated = { id: '1', name: 'Updated', type: 'SME' };
    mockPrisma.enterprise.update.mockResolvedValue(updated);

    const result = await service.update('1', updateDto);
    expect(result).toEqual(updated);
  });

  it('debería eliminar una empresa', async () => {
    const deleted = { id: '1', name: 'A', type: 'SME' };
    mockPrisma.enterprise.delete.mockResolvedValue(deleted);

    const result = await service.remove('1');
    expect(result).toEqual(deleted);
  });

  it('debería devolver transfers de una empresa', async () => {
    const transfers = [{ id: 't1', amount: 100, enterpriseId: '1' }];
    mockPrisma.enterprise.findUnique.mockResolvedValue({ transfers });

    const result = await service.getEnterpriseTransfers('1');
    expect(result).toEqual(transfers);
  });

  it('debería devolver empresas con transfers recientes', async () => {
    const enterprises = [
      { id: '1', name: 'A', transfers: [{ id: 't1', amount: 100 }] },
    ];
    mockPrisma.enterprise.findMany.mockResolvedValue(enterprises);

    const result = await service.getEnterprisesWithRecentTransfers();
    expect(result).toEqual(enterprises);
  });

  it('debería devolver empresas creadas en el último mes', async () => {
    const enterprises = [{ id: '1', name: 'A', type: 'SME' }];
    mockPrisma.enterprise.findMany.mockResolvedValue(enterprises);

    const result = await service.getEnterprisesCreatedLastMonth();
    expect(result).toEqual(enterprises);
  });
});
