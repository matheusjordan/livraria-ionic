import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { BookModel } from 'src/app/models/book-model';

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book-catalog.component.html',
  styleUrls: ['./book-catalog.component.scss'],
})
export class BookCatalogComponent implements OnInit {
  books: BookModel[] = [];

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

}
