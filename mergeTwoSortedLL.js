/*
Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. Either head pointer may be null meaning that the corresponding list is empty.

Example
 refers to 
 refers to 

The new list is 

Function Description

Complete the mergeLists function in the editor below.

mergeLists has the following parameters:

SinglyLinkedListNode pointer headA: a reference to the head of a list
SinglyLinkedListNode pointer headB: a reference to the head of a list
Returns

SinglyLinkedListNode pointer: a reference to the head of the merged list
Input Format

The first line contains an integer , the number of test cases.

The format for each test case is as follows:

The first line contains an integer , the length of the first linked list.
The next  lines contain an integer each, the elements of the linked list.
The next line contains an integer , the length of the second linked list.
The next  lines contain an integer each, the elements of the second linked list.
*/

function mergeLists(head1, head2) {
    let result = new SinglyLinkedListNode(0)
    let current = result
    
    while(head1 !== null && head2 !== null) {
        if (head1.data < head2.data) {
            current.next = head1
            head1 = head1.next
        } else {
            current.next = head2
            head2 = head2.next
        }
        current = current.next
    }
    
    if (head1 !== null) {
        current.next = head1
    } else if (head2 !== null) {
        current.next = head2
    }
    
    return result.next
}

