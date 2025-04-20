import {Component, Input} from '@angular/core';
import {Element} from '../model';

@Component({
  selector: 'app-element',
  imports: [],
  templateUrl: './element.component.html',
  styleUrl: './element.component.scss'
})
export class ElementComponent {
  @Input({required:true}) element?: Element

}
