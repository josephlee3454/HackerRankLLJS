/*
Given a pointer to the head of a singly-linked list, print each  value from the reversed list. If the given list is empty, do not print anything.

Example

 refers to the linked list with  values 

Print the following:
3
2
1

Function Description

Complete the reversePrint function in the editor below.

reversePrint has the following parameters:

SinglyLinkedListNode pointer head: a reference to the head of the list
Prints

The  values of each node in the reversed list.

Input Format

The first line of input contains , the number of test cases.

The input of each test case is as follows:

The first line contains an integer , the number of elements in the list.
Each of the next n lines contains a data element for a list node.
Constraints

, where  is the  element in the list.
*/

function reversePrint(head) {
    let reverse = [];
    let currNode = head;
    while (currNode != null) {
        reverse.push(currNode.data);
        currNode = currNode.next;
    }

    for (let i = reverse.length - 1; i >= 0; i--){
        console.log(reverse[i]);
    }

}


