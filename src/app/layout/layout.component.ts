import {Component, Input} from '@angular/core';
import {Horizontal, Layout, Vertical} from '../model';
import {JsonPipe} from '@angular/common';
import {ElementComponent} from '../element/element.component';

@Component({
  selector: 'app-layout',
  imports: [JsonPipe, ElementComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @Input({required: true}) layout?: Layout
}
