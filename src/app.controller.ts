import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RequestDto } from "./dto/request.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Body() dto: RequestDto) {
    return this.appService.getEmbedding(dto.link);
  }
}
