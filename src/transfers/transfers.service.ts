import { Injectable } from '@nestjs/common';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { UpdateTransferDto } from './dto/update-transfer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Transfer } from '@prisma/client';

@Injectable()
export class TransfersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTransferDto: CreateTransferDto): Promise<Transfer> {
    try {
      return await this.prisma.transfer.create({
        data: {
          ...createTransferDto,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error(`Prisma error: ${error.message}`);
      }
      throw error;
    }
  }

  async findOne(id: string): Promise<Transfer | null> {
    return await this.prisma.transfer.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    updateTransferDto: UpdateTransferDto,
  ): Promise<Transfer> {
    try {
      return await this.prisma.transfer.update({
        where: { id },
        data: {
          ...updateTransferDto,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error(`Prisma error: ${error.message}`);
      }
      throw error;
    }
  }

  async remove(id: string): Promise<Transfer> {
    try {
      return await this.prisma.transfer.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error(`Prisma error: ${error.message}`);
      }
      throw error;
    }
  }
}
