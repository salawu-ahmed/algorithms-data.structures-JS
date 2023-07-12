// queue implementation with arrays
class Queue {
    constructor(){
        this.items = []
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        return this.items.shift()
    }
    size(){
        return this.items.length
    }
    top(){
        return this.items[0]
    }
    isEmpty(){
        return this.items.length === 0
    }
    print(){
        console.log(this.items.toString())
    }
}

const queue = new Queue
queue.enqueue(546)
queue.enqueue(367)
queue.enqueue(865)
queue.enqueue(445)
let item = queue.dequeue()
console.log(item);
queue.print()