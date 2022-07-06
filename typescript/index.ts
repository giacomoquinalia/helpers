/**
  Description: 
    Transform recursively the information of the given object in optional.
  Usage: 
    type Foo = {
        bar: string
        zoo: { boo: number }
    }
    type PartialFoo = DeepPartial<Foo>
*/
type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}
