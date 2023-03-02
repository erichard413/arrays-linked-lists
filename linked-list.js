/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head =  newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    const removedNode = this.tail
    let currentNode = this.head;
    if (this.length == 0) return;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    if (this.length == 2) {
      this.tail = this.head;
      this.length = 1;
      return removedNode.val
    }
    if (this.length > 2) {
      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }
      this.tail = currentNode;
      this.length--;
    }
    
    return removedNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    const removedNode = this.head;
    let nextNode = this.head.next;
    if (this.length == 0) return null;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removedNode.val;
    }
    if (nextNode) {
      this.head = nextNode;
      this.length--
      return removedNode.val; 
    }
    return removedNode.val;
  }

  /** getAt(idx): get val at idx. */

  // using .repeat() for extra points. Still O(n) tho?
  getAt(idx) {
    if (this.length > 1 && idx == 0) return this.head.val;
    function getNode () {
      let start= "this.head"
      let nexts = ".next".repeat(idx);
      return start+nexts;
    }
    let node = eval(getNode());
    return node.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
      if (idx==0) {
        this.head.val = val;
      } else {
      let currentNode = this.head;
      let currentIdx = 0;
      while (idx < currentIdx){
        currentNode = currentNode.next;
        currentIdx++
      }
      currentNode.next.val = val;
      }
      
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx==0) {
      this.unshift(val);
    } else if (idx >= this.length -1)  {
      this.push(val);
     } else {
      let currentNode = this.head;
      let currentIdx = 0;
      while (currentIdx != idx-1) {
        currentNode = currentNode.next;
        currentIdx++;
      }
      let newNode = new Node(val);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.length++
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx==0){
      this.shift();
    } else if (idx >= this.length -1) {
      this.pop();
    } else {
      let currentNode = this.head;
      let currentIdx = 0;
      while (currentIdx != idx-1) {
        currentNode = currentNode.next;
        currentIdx++;
      }
      currentNode.next = currentNode.next.next;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length == 0) return 0;
    let currentIdx = 0;
    let currentNode = this.head;
    let sum = 0;
    while (currentIdx <= this.length-1) {
      sum += currentNode.val;
      currentIdx++;
      if (currentNode.next){
        currentNode = currentNode.next;
      }
    }
    return sum/this.length;
  }
}

module.exports = LinkedList;
