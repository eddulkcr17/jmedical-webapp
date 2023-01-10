import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgSrc: string = '../assets/images/about_1.jpg';
  title = 'jmedical-webapp';
}
