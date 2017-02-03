'use strict';
var tail = null;

function ANode(value, next) {
  this.value = value;
  this.next = next;
}

function push(value) {
  var oldTail = tail;

  var nextNode = new ANode(value, oldTail);
  tail = nextNode;
  // count++;
}

function pop() {
  if (tail === null) {
    return null;
  }
  else {
    let oldTail = tail;
    tail = oldTail.prev;
    return oldTail;
  }
}

push("hello");
push("world");

while (tail !== null) {
  console.log(tail.value);
  // count --;
  tail = tail.next;
}
