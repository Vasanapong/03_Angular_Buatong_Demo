import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  indexImg = 1;

  imgPath = `/assets/image/dishes/header_food${this.indexImg}.jpg`

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth >= 1280){
      setInterval(()=>{
        if(this.indexImg < 11){
          this.indexImg++
          this.imgPath = `/assets/image/dishes/header_food${this.indexImg}.jpg`
        }else{
          this.indexImg = 1
          this.imgPath = `/assets/image/dishes/header_food${this.indexImg}.jpg`
        }
      },4000)
    }
  }

}
