import { Injectable } from '@angular/core';
import { Book } from './book.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:2929/books');
  }

  getBooksNew(): Promise<Book[]>{
    return firstValueFrom(this.http.get<Book[]>('http://localhost:2929/books'));
  }

  getBookByIsbn(isbn: string): Observable<Book>{
    return this.http.get<Book>('http://localhost:2929/books/' + isbn);
  }

  deleteBookByIsbn(isbn: string){
    
  }

}
