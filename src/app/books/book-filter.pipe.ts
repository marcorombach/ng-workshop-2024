import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book.interface';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(booklist: Book[], searchTerm: string): Book[] {
    const filterValue = (searchTerm || '').toLowerCase();
    const books = booklist || [];

    return books.filter((book) => {
      return book.title.toLowerCase().includes(filterValue) || book.author.toLowerCase().includes(filterValue) || book.isbn.toLowerCase().includes(filterValue);
    });
  }

}
