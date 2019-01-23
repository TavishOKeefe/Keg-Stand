import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.models';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent implements OnInit {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

}
