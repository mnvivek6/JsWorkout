

//  object one have a function 
let object1={
    name:'object1',
    func:function() {
        
        console.log('now am in '+this.name)
    }
}

let object2={

    name:'object2'
}
object1.func.call(object2)