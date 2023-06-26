import random;

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

linkList = ListNode(random.randint(-10,20))
linkList.next = ListNode(random.randint(-10,20))
linkList.next.next = ListNode(random.randint(-10,20))
linkList.next.next.next = ListNode(random.randint(-10,20))


def showArr(list):
    arr = []
    iter = list
    while(iter):
        arr.append(iter.val)
        iter = iter.next

    return arr


print(showArr(linkList))


class Solution:
    def insertionSortList(self, head):

        guard = ListNode(-5001);

        while(head):
            prev = guard;

            while(prev.next and prev.next.val < head.val):
                prev = prev.next;

            next = head.next;
            head.next = prev.next;
            prev.next = head;
            head = next;

        return guard.next;

solution = Solution()
print(showArr(solution.insertionSortList(linkList)))