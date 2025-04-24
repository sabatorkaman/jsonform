import {Component, Input} from '@angular/core';
import {Horizontal, Layout, Vertical} from '../model';
import {ElementComponent} from '../element/element.component';
import {VerticalComponent} from '../vertical/vertical.component';
import {DynamicLayoutDirective} from './dynamic-layout.directive';

@Component({
  selector: 'app-layout',
  imports: [ DynamicLayoutDirective, ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @Input({required:true}) layout?:Layout


}
