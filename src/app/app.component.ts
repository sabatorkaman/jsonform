import { Component } from '@angular/core';
import {LayoutComponent} from './layout/layout.component';
import {Horizontal, Layout, Element, Vertical} from './model';
@Component({
  selector: 'app-root',
  imports: [
    LayoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  layout: Layout = {
    type: "horizontal",
    childs: [
      {
        type: 'vertical',
        childs: [
          {type: 'element', elementType: 'password', label: 'password'} as Element ,
          {type: 'element', elementType: 'text', label: 'saba'}  as Element  ,
          {type: 'element', elementType: 'button', label: 'btn'}  as Element  ,
        ]
      } as Vertical,
      {type: 'horizontal', childs: [
          {

          }
        ]} as Horizontal,
      {type: 'element', elementType: 'text', label: 'saba'} as Element,
      {type: 'element', elementType: 'button', label: 'btn'}  as Element,

    ],
  } as Horizontal

}


