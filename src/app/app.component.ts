import {Component} from '@angular/core';
import {LayoutComponent} from './layout/layout.component';
import {Element, Horizontal, Layout, Vertical} from './model';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [
    LayoutComponent, ButtonModule
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
          {type: 'element', elementType: 'password', label: 'password'} as Element,
          {type: 'element', elementType: 'text', label: 'name'} as Element,
          {type: 'element', elementType: 'button', label: 'btn'} as Element,

        ]
      } as Vertical,
      {
        type: 'vertical',
        childs: [
          {type: 'element', elementType: 'email', label: 'email'} as Element,
          {type: 'element', elementType: 'button', label: 'submit'} as Element,

        ]
      } as Horizontal,

    ]
  } as Horizontal;
}
