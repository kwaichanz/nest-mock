import { Controller, Get, Req, Body, Post } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';
import { Role } from 'src/common/enums/role.enum';
import { Roles } from 'src/common/decorators/roles.decorator';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) { }

  @Post('create')
  @Roles(Role.Admin)
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
  }

  @Get('findAll')
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
