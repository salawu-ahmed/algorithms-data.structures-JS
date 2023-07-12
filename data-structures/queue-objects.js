class Queue{
    constructor(){
        this.items = {}
        this.front = 0
        this.rear = 0
    }
    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }
    dequeue(){
        let item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    isEmpty(){
        return this.items.rear === this.items.front 
    }
    size(){
        return this.items.rear - this.items.front
    }
    top(){
        return this.items[this.front]
    }
    print(){
        console.log(this.items)
    }
}

const queue = new Queue
queue.enqueue(456)
queue.enqueue(786)
queue.enqueue(344)
queue.enqueue(565)
console.log(queue);
queue.dequeue()
queue.print()
queue.print()
queue.print()
