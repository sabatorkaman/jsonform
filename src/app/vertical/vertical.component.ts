import {Component, Input} from '@angular/core';
import {Vertical} from '../model';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {LayoutComponent} from '../layout/layout.component';

@Component({
  selector: 'app-vertical',
  imports: [FormsModule, InputTextModule, LayoutComponent],
  templateUrl: './vertical.component.html',
  styleUrl: './vertical.component.scss'
})
export class VerticalComponent {
  @Input({required: true}) layout?: Vertical;
}
