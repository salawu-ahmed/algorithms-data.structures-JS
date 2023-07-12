class CircularQueues{
    constructor(capacity){
        this.items = new Array(capacity)
        this.currentLength = 0
        this.capacity = capacity
        this.front = -1
        this.rear = -1
    }
    isEmpty(){
        return this.currentLength === 0
    }
    isFull(){
        return this.currentLength === this.capacity
    }
    enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = element
            this.currentLength++
        }
        if(this.front == -1){
            this.front = this.rear
        }
    }
    dequeue(){
        if(!this.isEmpty()){
            let item = this.items[this.front]
            this.item[this.front] = null 
            this.front = (this.front + 1) % this.capacity
            this.currentLength--
            return item
        }
        else{
            return "Queue is empty"
        }
    }
    top(){
        if(this.isEmpty()){
            return "Queue is empty"
        }
        return this.items[this.front]
    }
    size(){
        return this.currentLength
    }
    print(){
        let listValues = ''
        for(let i=this.front; i<this.rear; i++%this.capacity){
            listValues += this.items[i] + ''
        }
        listValues + this.items[this.rear]
        console.log(listValues); 
    }
}


const circularQueue = new CircularQueues(5)
circularQueue.enqueue(3577)
circularQueue.enqueue(9577)
circularQueue.enqueue(6543)
circularQueue.print()
console.log(circularQueue);