import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() isMenu = false
  @Output() isMenuChange = new EventEmitter

  handleShowMenu(){
    this.isMenu = !this.isMenu
    this.isMenuChange.emit(this.isMenu)
  }

}
