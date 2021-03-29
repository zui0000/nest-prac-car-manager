import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from './car.dto';
@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  @Get()
  public getCars(): any {
    return this.carService.getCars();
  }

  @Get(':id')
  public async getCarById(@Param('id') id: number): Promise<any> {
    return this.carService.getCarById(id);
  }

  @Post()
  public postCar(@Body() car: CarDto): any {
    return this.carService.postCar(car);
  }

  @Delete(':id')
  public async deleteCarById(@Param('id') id: number): Promise<any> {
    return this.carService.deleteCarById(id);
  }

  @Put(':id')
  public async putCarById(
    @Param('id') id: number,
    @Query() query: any,
  ): Promise<any> {
    const propertyName = query.property_name;
    const propertyValue = query.property_value;
    return this.carService.putCarById(id, propertyName, propertyValue);
  }
}
