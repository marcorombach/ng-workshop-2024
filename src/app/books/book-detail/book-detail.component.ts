import { Component, OnInit } from '@angular/core';
import { Book } from '../book.interface';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'book-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent implements OnInit {
  book!: Book;

  constructor(private route: ActivatedRoute, public bookDataService: BookDataService){}

  ngOnInit(){
    this.route.params.subscribe((params) => {
      this.bookDataService.getBookByIsbn(params['isbn']).subscribe((book) => {
        this.book = book;
      });
    });
  }
}
