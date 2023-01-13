import { Injectable } from '@nestjs/common';
import { BookModule } from './book.model';

@Injectable()
export class AppService {
  public books: BookModule[] = [
    {title: " Harry potter", author: " Jk Rowling ", published: 2012},
    {title: " Davin Ci Code", author: " Dan Brown ", published: 2015},
    {title: " Harry potter Deathly Hollows", author: " Jk Rowling ", published: 2017},
  ]

  getAllBooks(): BookModule[]{
    return this.books;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
