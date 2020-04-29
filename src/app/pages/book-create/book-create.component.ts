import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { BookService } from 'src/app/services/book.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss'],
})
export class BookCreateComponent implements OnInit {

  bookForm: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.createBookForm();
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

  save() {
    this.bookService.addBook(this.bookForm.value);
    this.modalCtrl.dismiss();
  }

  private createBookForm() {
    this.bookForm = this.fb.group({
      title: [null, Validators.required],
      editor: [null, Validators.required],
      picture: [null, Validators.required],
      pages: [null, Validators.required]
    });
  }

}
