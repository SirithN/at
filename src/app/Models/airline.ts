//In typescript, any class if it has to be used in another file,
// it should be exported.Interface is used here to represent data but will not contain any functions in it

//ng g i Models/airline
export interface Airline {
    airlineId:number
    name:string
    destination:string
    fare:number
    image:string
}
