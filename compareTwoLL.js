/*
You’re given the pointer to the head nodes of two linked lists. Compare the data in the nodes of the linked lists to check if they are equal. If all data attributes are equal and the lists are the same length, return . Otherwise, return .

Example:
The two lists have equal data attributes for the first  nodes.  is longer, though, so the lists are not equal. Return .

Function Description:

Complete the compare_lists function in the editor below.

compare_lists has the following parameters:

SinglyLinkedListNode llist1: a reference to the head of a list
SinglyLinkedListNode llist2: a reference to the head of a list
Returns

int: return 1 if the lists are equal, or 0 otherwise
Input Format

The first line contains an integer , the number of test cases.

Each of the test cases has the following format:
The first line contains an integer , the number of nodes in the first linked list.
Each of the next  lines contains an integer, each a value for a data attribute.
The next line contains an integer , the number of nodes in the second linked list.
Each of the next  lines contains an integer, each a value for a data attribute.

*/




function CompareLists(llist1, llist2) {
    
    let currNode = llist1;
    let currNode2 = llist2;

    while(currNode && currNode2){
        if(currNode.data === currNode2.data){
            currNode = currNode.next;
            currNode2 = currNode2.next;
        }
        else{
            return 0;
        }
    }
    if(currNode || currNode2){
        return 0;
    }else{
        return 1;
    }

}
