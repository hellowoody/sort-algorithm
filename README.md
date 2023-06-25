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