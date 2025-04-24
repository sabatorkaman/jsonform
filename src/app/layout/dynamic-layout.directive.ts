import {ComponentRef, Directive, Input, OnChanges, OnInit, SimpleChanges, Type, ViewContainerRef,} from '@angular/core';
import {Layout} from '../model';


export const LayoutMap: Map<string, Type<any>> = new Map();

export function register(name: string, type: Type<any>) {
  if (LayoutMap.has(name)) {
    console.log(`Error component with name: ${name} already has be defined`)
    return
  }
  LayoutMap.set(name, type)
}

@Directive({
  selector: '[dynamic-layout]',
})
export class DynamicLayoutDirective implements OnInit, OnChanges {
  @Input() layout!: Layout;

  constructor(
    private viewContainerRef: ViewContainerRef,
  ) {
  }


  load(): void {
    if (this.layout && this.layout.type && LayoutMap.has(this.layout.type)) {
      this.viewContainerRef.clear()
      let component: Type<any> = LayoutMap.get(this.layout.type)!!
      const componentRef: ComponentRef<any> = this.viewContainerRef.createComponent(component);
      componentRef.instance.layout = this.layout;
    }
  }

  ngOnInit(): void {
    // this.load()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['layout'])
      this.load()
  }
}
