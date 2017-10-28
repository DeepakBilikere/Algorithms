function linkedList() {
    this.head = null
    this.length = 0
    
    function Node(value){
        this.element = value
        this.next = null
    }

    this.add = function(value){
        var node = new Node(value)
        var current = this.head

        if(!this.head) {
            this.head = node
            this.length++
            return node
        }

        while(current.next){
            current = current.next
        }
        current.next = node
        this.length++
        return node
    }

   this.remove = function(value){
     var current = this.head
     if(current.element === value) {
         this.head = current.next
         this.length--
         return
     }
     while(current.element !== value) {
         var previous = current
         var current = current.next
     }
     previous.next = current.next
     this.length--
     return
   }
}

var a = new linkedList()
a.add(2)
a.add(3)
a.remove(3)
console.log('######', a)