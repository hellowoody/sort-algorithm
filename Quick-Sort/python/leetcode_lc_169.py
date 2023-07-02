nums = [3,2,3]

class Solution:
    def majorityElement(self, nums):

        self.quickSort(nums,0,len(nums)-1)

        return nums[int(len(nums)/2)]

    def quickSort(self,arr,start,end):
        if start >= end:
            return 
        
        leftIdx,rightIdx = self.partition(arr,start,end)

        self.quickSort(arr,start,leftIdx-1)
        self.quickSort(arr,rightIdx,end)

    def partition(self,arr,start,end):
        i = left = start
        right = end + 1

        pivot = arr[start]

        while i < right :
            if arr[i] < pivot:
                arr[left+1],arr[i] = arr[i],arr[left+1]
                i+=1
                left+=1
            elif arr[i] > pivot:
                arr[i],arr[right-1] = arr[right-1],arr[i]
                right-=1
            else:
                i+=1

        arr[start] = arr[left]
        arr[left] = pivot

        return left,right


solution = Solution()

print("数组{} 其中的多数元素为 {} ".format(nums,solution.majorityElement(nums)))