import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  //CONTROLLER MODEL
  constructor(private readonly appService: AppService) {}

  //CONTROLLER MODEL VIEW
  @Get()
  getView(@Res() res: Response) {
    return res.render("index", {books: this.appService.getAllBooks()});
  }
}
