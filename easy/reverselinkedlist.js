// Reverse Linked List
var reverseList = function(head) {
    let previous = null;
    let current = head;
    let nextNode = null;

    while (current !== null){
        nextNode = current.next;
        current.next = previous;
        previous = current;
        current = nextNode;
    }
    return previous;
};
