import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { BookCreateComponent } from '../book-create/book-create.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {}

  async createBookModal() {
    const modal = await this.modalCtrl.create({
      component: BookCreateComponent,
      cssClass: 'create-book-modal'
    });

    return await modal.present();
  }

}
