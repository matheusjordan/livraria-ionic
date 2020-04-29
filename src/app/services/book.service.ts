import { Injectable } from '@angular/core';
import { BookModel } from '../models/book-model';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: BookModel[] = [];

  constructor(
    private toastCtrl: ToastController,
  ) { }

  getBooks(): BookModel[] {
    return this.books;
  }

  addBook(book: BookModel) {
    this.books.push(book);
    this.sucessToast();
  }

  async sucessToast() {
    const toast = await this.toastCtrl.create({
      message: 'Livro adicionado com sucesso!',
      duration: 1500
    });

    return await toast.present();
  }
}
