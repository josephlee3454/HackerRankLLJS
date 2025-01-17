/*
Delete the node at a given position in a linked list and return a reference to the head node. The head is at position 0. The list may be empty after you delete the node. In that case, return a null value.

Example
After removing the node at position , .

Function Description

Complete the deleteNode function in the editor below.

deleteNode has the following parameters:
- SinglyLinkedListNode pointer llist: a reference to the head node in the list
- int position: the position of the node to remove

Returns
- SinglyLinkedListNode pointer: a reference to the head of the modified list

Input Format

The first line of input contains an integer , the number of elements in the linked list.
Each of the next  lines contains an integer, the node data values in order.
The last line contains an integer, , the position of the node to delete.


*/


function deleteNode(llist, position) {
    let temp = llist;
    let count = 1;
    
    if(position == 0){
        return llist.next;
    }
    
    while(count != position){
        temp = temp.next
        count+=1
    }
    temp.next = temp.next.next
    
    return llist;
}

