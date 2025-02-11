import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateDealDto } from './dto/create-deal.dto';
import { UpdateDealDto } from './dto/update-deal.dto';

@Injectable()
export class DealsService {

  constructor(private readonly databaseService: DatabaseService) { }

  async create(createDealDto: CreateDealDto) {

    const dealExists = await this.databaseService.deal.findFirst({
      where: {
        customerId: createDealDto.customerId
      }
    })

    if (!dealExists) {
      return this.databaseService.deal.create({
        data: createDealDto,
      });
    }
    else {
      return 'A Second Deal cannot be made for same customer!'
      throw new Error('A second deal cannot be made for the same customer!');
    }

  }

  async findAll() {
    return this.databaseService.deal.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.deal.findUnique({
      where: {
        id,
      }
    });
  }

  async update(id: number, updateDealDto: UpdateDealDto) {
    return this.databaseService.deal.update({
      where: {
        id,
      },
      data: updateDealDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.deal.delete({
      where: {
        id,
      }
    });
  }
}
