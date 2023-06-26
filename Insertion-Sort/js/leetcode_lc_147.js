function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const linkList = new ListNode(Math.floor(Math.random()*10-5))

linkList.next = new ListNode(Math.floor(Math.random()*10-5))
linkList.next.next = new ListNode(Math.floor(Math.random()*10-5))
linkList.next.next.next = new ListNode(Math.floor(Math.random()*10-5))

function showArr(linkList){
    const arr = []
    let iter = linkList
    while(iter){
        arr.push(iter.val)
        iter = iter.next
    }
    return arr
}

console.log(showArr(linkList))

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    const guard = new ListNode(Number.MIN_VALUE) // 哨兵，设置一个很小的值

    while(head){     
        let prev = guard      // 将已经排序好的列表的head重置到哨兵
    
        while(prev.next && prev.next.val < head.val){
            prev = prev.next  // 移动已排序好的链表的位置，找到将原链表中第一个元素插入到排序链表中合适的位置
        }

        const next = head.next
        head.next = prev.next // 在已排序好的链表中合适的位置前增加小的值
        prev.next = head      // 在已排序好的链表中合适的位置后添加大的值
        head = next 
    }

    return guard.next

};

console.log(showArr(insertionSortList(linkList)))

