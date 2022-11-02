

function id<T>(item: T): T {
    return item;
}

interface ImyDto { props: number, props1: string }

let num = id<ImyDto>({ props: 1, props1: "2" })



type MyDtoOrNumber = ImyDto | number
// let num = id<MyDtoOrNumber>({ props: 1, props1: "2" })


// класове

class MyClass {
    constructor(public name: string, public age:number){

    }
}

const ivan = new MyClass('Ivan','2')