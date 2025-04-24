import {Component, Input} from '@angular/core';
import {Element} from '../model';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-element',
  imports: [InputTextModule, ButtonModule],
  templateUrl: './element.component.html',
  styleUrl: './element.component.scss'
})
export class ElementComponent {
  @Input({required: true}) layout?: Element
}
