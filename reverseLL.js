/*
Given the pointer to the head node of a linked list, change the next pointers of the nodes so that their order is reversed. The head pointer given may be null meaning that the initial list is empty.

Example
 references the list 

Manipulate the  pointers of each node in place and return , now referencing the head of the list .

Function Description

Complete the reverse function in the editor below.

reverse has the following parameter:

SinglyLinkedListNode pointer head: a reference to the head of a list
Returns

SinglyLinkedListNode pointer: a reference to the head of the reversed list
Input Format

The first line contains an integer , the number of test cases.

Each test case has the following format:

The first line contains an integer , the number of elements in the linked list.
Each of the next  lines contains an integer, the  values of the elements in the linked list.


*/





function reverse(llist) {

    let head = llist;
    let currNode = head;
    let prev;
    let nextNode;
    
    if(head === null){
      return;   
    }     

    while(currNode){
        nextNode = currNode.next;
        currNode.next = prev;
        prev = currNode;
        currNode = nextNode;
        nextNode = null;
    }
    
    head = prev;
    return head; 
}

