class Stack{
    constructor (){
        this.items = []
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length
    }
    top(){
        return this.items[this.items.length - 1]
    }
    print(){
        console.log(this.items.toString());
    }
}

const stack = new Stack
console.log(stack.isEmpty());
console.log(stack.size());
stack.push(20)
stack.push(2365)
stack.push(2045745)
stack.push(354)
stack.pop()
console.log(stack.top());
console.log(stack.size());
console.log(stack.print());