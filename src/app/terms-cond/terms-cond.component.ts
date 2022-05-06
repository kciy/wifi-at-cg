import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-cond',
  templateUrl: './terms-cond.component.html',
})
export class TermsCondComponent {
  public showModal = false;

  constructor() {}

  public toggleModal(): void {
    this.showModal = !this.showModal;
  }
}
