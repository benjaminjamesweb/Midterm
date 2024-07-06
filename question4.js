// Question 4
// Given a linked list, determine if it has a cycle in it


class Node {
    constructor(data) {
        this.data = data; 
        this.next = null; 
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

function checkIfCycleExists(headNode) {

    let currentNode = headNode;

    while (currentNode.next != null && currentNode.next != headNode) {
        currentNode = currentNode.next;
    } 
    if (currentNode.next == headNode) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES: 

let node1 = new Node("A");
let node2 = new Node("B");
let node3 = new Node("C");

node1.next = node2;
node2.next = node3;
node3.next = node1;
// should return true!

console.log(checkIfCycleExists(node1));

let test2node1 = new Node(1);
let test2node2 = new Node(2);
let test2node3 = new Node(3);

test2node1.next = test2node2;
test2node2.next = test2node3;
// Should return false!

console.log(checkIfCycleExists(test2node1));