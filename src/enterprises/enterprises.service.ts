import { Injectable } from '@nestjs/common';
import { CreateEnterpriseDto } from './dto/create-enterprise.dto';
import { UpdateEnterpriseDto } from './dto/update-enterprise.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Enterprise, Transfer } from '@prisma/client';
import { Prisma } from '@prisma/client';

@Injectable()
export class EnterprisesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEnterpriseDto: CreateEnterpriseDto): Promise<Enterprise> {
    try {
      return await this.prisma.enterprise.create({
        data: createEnterpriseDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error(`Prisma error: ${error.message}`);
      }
      throw error;
    }
  }

  async findAll(): Promise<Enterprise[]> {
    return await this.prisma.enterprise.findMany();
  }

  async findOne(id: string): Promise<Enterprise | null> {
    return await this.prisma.enterprise.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    updateEnterpriseDto: UpdateEnterpriseDto,
  ): Promise<Enterprise | null> {
    try {
      return await this.prisma.enterprise.update({
        where: { id },
        data: {
          ...updateEnterpriseDto,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error(`Prisma error: ${error.message}`);
      }
      throw error;
    }
  }

  async remove(id: string): Promise<Enterprise> {
    try {
      return await this.prisma.enterprise.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error(`Prisma error: ${error.message}`);
      }
      throw error;
    }
  }

  async getEnterpriseTransfers(id: string): Promise<Transfer[]> {
    const enterprise = await this.prisma.enterprise.findUnique({
      where: { id },
      include: { transfers: true },
    });
    return enterprise?.transfers || [];
  }

  async getEnterprisesWithRecentTransfers(): Promise<Enterprise[]> {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    return await this.prisma.enterprise.findMany({
      where: {
        transfers: {
          some: {
            createdAt: {
              gte: oneMonthAgo,
            },
          },
        },
      },
      include: {
        transfers: true,
      },
    });
  }

  async getEnterprisesCreatedLastMonth(): Promise<Enterprise[]> {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    return await this.prisma.enterprise.findMany({
      where: {
        createdAt: {
          gte: oneMonthAgo,
        },
      },
    });
  }
}
