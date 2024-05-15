import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../book.interface';
import { RatingInfo } from '../../utils/rating/ratingInfo.interface';
import { BookDataService } from '../book-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit, OnDestroy, OnChanges {

  imageWidth = 40;
  showCover = true;
  searchTerm = '';
  books: Book[] = [];
  

  constructor(public bookDataService: BookDataService){ }

  ngOnChanges(){
    console.log('OnChanges');
    // Wird aufgerufen wenn Daten über @Input an eine Komponente übertragen werden
  }
  
  ngOnInit(){
    // Wird aufgerufen kurz bevor die Komponente im Browser als HTML gerendert wird
    console.log('OnInit');

    // Mit Observable
    this.bookDataService.getBooks().subscribe((books) =>{
      this.books = books;
    }); 
    

    /* Mit Promise (async/await)
    this.books = await this.bookDataService.getBooksNew();
    */
  }

  ngOnDestroy(){
    console.log('OnDestroy');
    // hier sollten Observables zerstört/unsubscribed werden - da diese nicht mit der Komponente zerstört werden
    // Wird aufgerufen, kurz nach dem die Komponente nicht mehr angezeigt wird
  }

  toggleCover() {
    this.showCover = !this.showCover;
  }

  getBookId(book:any){
    return book.isbn;
  }

  updateRating(data: RatingInfo) {
    const book = this.books.find((book) => book.isbn == data.id);
    if(book){
      let value = 0;

      if(book.rating > data.rating){
        value = book.rating - (data.rating / book.ratings);
      }else{
        value = book.rating + (data.rating / book.ratings);
      }

      console.log(value);
      book.rating = parseFloat(Math.max(1, Math.min(5, value)).toFixed(4));
    }
  }

  deleteBook(){

  }

}
