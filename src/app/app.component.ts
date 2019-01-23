import { Component } from '@angular/core';
import { Keg } from './models/keg.models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedKeg = null;
  masterKegList: Keg[] = [
    new Keg("Dry Apple", "Tumalo", 8.00, .069),
    new Keg("Etienne", "Rack & Cloth", 7.00, .069),
    new Keg("Porter", "Stoup", 7.00, .062),
    new Keg("Oatmeal Stout", "pFriem", 6.50, .055),
    new Keg("Imperial Stout", "Reuben’s", 8.00, .119),
    new Keg("Shake", "Boulder", 7.00, .059),
  ];

  editKeg(keg) {
    this.selectedKeg = keg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKeg: Keg){
    this.masterKegList.push(newKeg);
  }

}
