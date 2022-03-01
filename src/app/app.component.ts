import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isToggle = false
  isMenu = false

  handleToggle(e:any){
    if(e === true){
      this.isToggle = true
    }else{
      let x = document.getElementById('toggle-menu')
      x?.classList.add('slide-out')
      setTimeout(()=>{this.isToggle = false},500)}
  }
}
