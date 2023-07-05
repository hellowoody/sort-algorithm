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

### 4.1 相对名次

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

## 5.Heap-Sort 堆排序 

>  O(nlogn) 的时间复杂度

> ![image](https://github.com/hellowoody/sort-algorithm/blob/main/Heap-Sort/gif/heapSort.gif?raw=true)  

> ![image](https://github.com/hellowoody/sort-algorithm/blob/main/Heap-Sort/gif/Sorting_heapsort_anim.gif?raw=true)  


### 5.1 数组中的第K个最大元素


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


### 5.2 最小的k个数


 > 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。   

 - 示例 1:
 ```
   输入：arr = [3,2,1], k = 2
   输出：[1,2] 或者 [2,1]
 ```
 - 示例 2:
 ```
   输入：arr = [0,1,2,1], k = 1
   输出：[0]
 ```


## 6.Quick-Sort 快速排序

>  平均 Ο(nlogn) 的时间复杂度，最坏情况 O(n²) 的时间复杂度

> ![image](https://github.com/hellowoody/sort-algorithm/blob/main/Quick-Sort/imgs/Sorting_quicksort_anim.gif?raw=true)  

> ![image](https://github.com/hellowoody/sort-algorithm/blob/main/Quick-Sort/imgs/alg-sort-fast.jpg?raw=true)  

### 6.1 排序数组

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

### 6.2 多数元素

 > 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 - 示例 1:
 ```
    输入：nums = [3,2,3]
    输出：3
 ```
 - 示例 2:
 ```
    输入：nums = [2,2,1,1,1,2,2]
    输出：2
 ```

## 7.Merge-Sort 归并排序

>  始终都是 O(nlogn) 的时间复杂度。代价是需要额外的内存空间。

> ![image](https://github.com/hellowoody/sort-algorithm/blob/main/Merge-Sort/gif/mergeSort.gif?raw=true)  

### 7.1 合并排序的数组

 > 给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。  
 > 初始化 A 和 B 的元素数量分别为 m 和 n。  

 - 示例 1:
 ```
    输入:
    A = [1,2,3,0,0,0], m = 3
    B = [2,5,6],       n = 3

    输出: [1,2,2,3,5,6]
 ```

### 7.2 数组中的逆序对

 > 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。    

 - 示例 1:
 ```
    输入: [7,5,6,4]
    输出: 5
 ```

## 8.Counting-Sort 计数排序

>  O(n) 的时间复杂度。  

> 计数排序的核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。  

> ![image](https://github.com/hellowoody/sort-algorithm/blob/main/Counting-Sort/gif/countingSort.gif?raw=true)  


### 8.1 排序数组

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

### 8.2 数组的相对排序

 > 给你两个数组，arr1 和 arr2，arr2 中的元素各不相同，arr2 中的每个元素都出现在 arr1 中。  
 > 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。  

 - 示例 1:
 ```
    输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
    输出：[2,2,2,1,4,3,3,9,6,7,19]
 ```
 - 示例 2:
 ```
    输入：arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
    输出：[22,28,8,6,17,44]
 ```

## 9.Radix-Sort 基数排序

>  O(n) 的时间复杂度。  

> ![image](https://github.com/hellowoody/sort-algorithm/blob/main/Radix-Sort/gif/radixSort.gif?raw=true)   