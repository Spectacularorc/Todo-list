import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list';
  constructor(){
    // setTimeout(()=>{
    //   this.title="Changed title"
    // },2000);
  }
}
