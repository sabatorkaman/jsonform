// export interface Layout {
//   type: 'element' | 'horizontal' | 'vertical',
// }
//
// export interface Element extends Layout {
//   elementType: 'text' | 'password' | 'button'
//   label: string
// }
//
// export interface Horizontal extends Layout {
//   childs: Layout[]
// }
//
// export interface Vertical extends Layout {
//   childs: Layout[]
// }

export interface Layout{
  type: 'element' | 'horizontal' | 'vertical',
}
export  interface Horizontal extends Layout{
  childs:Layout[]
}
export interface Vertical extends Layout{
  childs:Layout[]
}
export interface Element extends Layout{
  elementType: 'text' | 'password' | 'button',
  label:string
}
