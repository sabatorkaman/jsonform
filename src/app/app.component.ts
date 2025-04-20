import { Component } from '@angular/core';
import {LayoutComponent} from './layout/layout.component';
import {Element,Horizontal} from './model';

@Component({
  selector: 'app-root',
  imports: [
    LayoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  layout: any = {
    type: "vertical",
    childs: [


      ,
      {type: 'element', elementType:'password', label: 'password'},
      {type: 'element', elementType:'button', label: 'button'},
    ]
  }
}
