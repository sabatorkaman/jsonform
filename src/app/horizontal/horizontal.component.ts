import {Component, Input} from '@angular/core';
import {Horizontal} from '../model';
import {LayoutComponent} from "../layout/layout.component";

@Component({
  selector: 'app-horizontal',
  imports: [
    LayoutComponent
  ],
  templateUrl: './horizontal.component.html',
  styleUrl: './horizontal.component.scss'
})
export class HorizontalComponent {
  @Input({required: true}) layout?: Horizontal;

}
