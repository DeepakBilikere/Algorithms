
function List() {
    this.head = null
    this.length = 0

    function Node(value){
        this.data = value
        this.next = null
    }

    this.add = (value) => {
        var node = new Node(value)
        if(!this.head) {
            this.head = node
            this.length++
        } else {
            var current = this.head
            while(current.next != null) {
                current = current.next
            }
            current.next = node
            this.length++
        }
    }

    this.remove = (value) => {
        var current = this.head
        var previous = null
        while(current.data != value) {
            previous = current
            current = current.next
        }
        previous.next = current.next
        this.length--
    }

    this.insert = (value, position) => {
        var temp
        var node = new Node(value)
        var current = this.head
        var tempPosition = 1
        if(position === 1) {
          temp = this.head
          node.next = temp
          this.head = node
        } else {
            while(current.next != null) {
                tempPosition++
                var previous = current
                current = current.next
                if(tempPosition === position) {
                    previous.next = node
                    node.next = current
                    this.length++
                }
            }
        }
    }

}

var l = new List()
l.add(2)
l.add(3)
l.add(4)
l.insert(8, 1)
console.log('$$$$$$$$$$$$$$')
console.log(JSON.stringify(l))
console.log('$$$$$$$$$$$$$$')
l.remove(3)
console.log('uuuuuuuuuuuu')
console.log(JSON.stringify(l))
console.log('uuuuuuuuuuuu')