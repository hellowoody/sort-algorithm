# sort-algorithm
Several commonly used sorting algorithms

## 1.Bubble-Sort 冒泡排序 

>  O(n²) 的时间复杂度

> ![image](https://github.com/hellowoody/sort-algorithm/blob/main/Bubble-Sort/gif/bubbleSort.gif?raw=true)

### 1.1 把数组排成最小的数

 > 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。  

 - 示例 1:
 ```
    输入: [10,2]
    输出: "102"
 ```
 - 示例 2:
 ```
    输入: [3,30,34,5,9]
    输出: "3033459"
 ```

### 1.2 移动零

 > 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。  
 > 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

 - 示例 1:
 ```
    输入: nums = [0,1,0,3,12]
    输出: [1,3,12,0,0]
 ```
 - 示例 2:
 ```
    输入: nums = [0]
    输出: [0]
 ```

## 2.Selection-Sort 选择排序 

>  O(n²) 的时间复杂度

> ![image](https://github.com/hellowoody/sort-algorithm/blob/main/Selection-Sort/gif/selectionSort.gif?raw=true)

### 2.1 数组中的第K个最大元素


 > 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。  
 > 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。  
 > 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。  

 - 示例 1:
 ```
   输入: [3,2,1,5,6,4], k = 2
   输出: 5
 ```
 - 示例 2:
 ```
   输入: [3,2,3,1,2,4,5,5,6], k = 4
   输出: 4
 ```

### 2.2 排序数组


 > 给你一个整数数组 nums，请你将该数组升序排列。  

 - 示例 1:
 ```
    输入：nums = [5,2,3,1]
    输出：[1,2,3,5]
 ```
 - 示例 2:
 ```
    输入：nums = [5,1,1,2,0,0]
    输出：[0,0,1,1,2,5]
 ```

## 3.Insertion-Sort 插入排序 

>  O(n²) 的时间复杂度

> ![image](https://github.com/hellowoody/sort-algorithm/blob/main/Insertion-Sort/imgs/InsertSort-01.png?raw=true)

> ![image](https://github.com/hellowoody/sort-algorithm/blob/main/Insertion-Sort/imgs/InsertSort-02.png?raw=true)

> ![image](https://github.com/hellowoody/sort-algorithm/blob/main/Insertion-Sort/imgs/InsertSort-03.png?raw=true)

> ![image](https://github.com/hellowoody/sort-algorithm/blob/main/Insertion-Sort/imgs/InsertSort-04.png?raw=true)

### 3.1 对链表进行插入排序

 > 给定单个链表的头 head ，使用 插入排序 对链表进行排序，并返回 排序后链表的头 。 

 - 示例 1:
 ```
   输入: head = [4,2,1,3]
   输出: [1,2,3,4]
 ```

 - 示例 2:
 ```
   输入: head = [-1,5,3,4,0]
   输出: [-1,0,3,4,5]
 ```

## 4.Shell-Sort 希尔排序 

>  O(n^(1.3-2)) 的时间复杂度

> 初始增量第一趟 gap = length/2 = 4
> ![image](https://github.com/hellowoody/sort-algorithm/blob/main/Shell-Sort/imgs/ShellSort-01.png?raw=true)

> 第二趟，增量缩小为 2  
> ![image](https://github.com/hellowoody/sort-algorithm/blob/main/Shell-Sort/imgs/ShellSort-02.png?raw=true)  

> 第三趟，增量缩小为 1,得到最终排序结果  
> ![image](https://github.com/hellowoody/sort-algorithm/blob/main/Shell-Sort/imgs/ShellSort-03.png?raw=true)  

### 4.1 对链表进行插入排序

 > 给你一个长度为 n 的整数数组 score ，其中 score[i] 是第 i 位运动员在比赛中的得分。所有得分都 互不相同 。  

 > 运动员将根据得分 决定名次 ，其中名次第 1 的运动员得分最高，名次第 2 的运动员得分第 2 高，依此类推。运动员的名次决定了他们的获奖情况：
 >> 名次第 1 的运动员获金牌 "Gold Medal" 。   
 >> 名次第 2 的运动员获银牌 "Silver Medal" 。   
 >> 名次第 3 的运动员获铜牌 "Bronze Medal" 。  
 >> 从名次第 4 到第 n 的运动员，只能获得他们的名次编号（即，名次第 x 的运动员获得编号 "x"）。    

 > 使用长度为 n 的数组 answer 返回获奖，其中 answer[i] 是第 i 位运动员的获奖情况。  


 - 示例 1:
 ```
   输入：score = [5,4,3,2,1]
   输出：["Gold Medal","Silver Medal","Bronze Medal","4","5"]
   解释：名次为 [1st, 2nd, 3rd, 4th, 5th] 。
 ```

 - 示例 2:
 ```
   输入：score = [10,3,8,9,4]
   输出：["Gold Medal","5","Bronze Medal","Silver Medal","4"]
   解释：名次为 [1st, 5th, 3rd, 2nd, 4th] 。
 ```