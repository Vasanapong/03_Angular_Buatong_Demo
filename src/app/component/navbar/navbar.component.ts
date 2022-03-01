import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() isMenu = false;
  @Output() isMenuChange = new EventEmitter

  goHomepage(){
    document.getElementById('show-menu')?.classList.add('slide-out')
    this.isMenu = false
    setTimeout(()=>{this.isMenuChange.emit(this.isMenu)},500)
  }
}
