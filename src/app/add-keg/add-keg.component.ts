import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.models';

@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css']
})
export class AddKegComponent implements OnInit {
  @Output() sendKeg = new EventEmitter();
  constructor() { }

  // addKeg: Keg = new Keg(name, brand, price, alcoholContent);

  ngOnInit() {
  }

  submitForm(name , brand, price, alcoholContent) {
    let newKeg: Keg = new Keg(name, brand, parseInt(price), parseInt(alcoholContent));
      this.sendKeg.emit(newKeg);
  }

}
