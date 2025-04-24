export interface Layout {
  type: 'element' | 'horizontal' | 'vertical',
}

export interface Horizontal extends Layout {
  childs: Layout[]
}

export interface Vertical extends Layout {
  childs: Layout[]
}

export interface Element extends Layout {
  elementType: 'text' | 'password' | 'button' | 'email',
  label: string
}
