nums = [3,2,1,5,6,4]
k = 2

class Solution:
    def findKthLargest(self, nums, k: int) -> int:
        for i in range(int(len(nums)/2)-1,-1,-1):
            self.heapify(nums,i,len(nums))

        for i in range(len(nums)-1,-1,-1):
            k -= 1
            if k == 0 :
                return nums[0]

            nums[0],nums[i] = nums[i],nums[0]
            self.heapify(nums,0,i)

        return nums[0]

    def heapify(self,arr,idx,n):
        left = 2*idx + 1
        right = 2*idx + 2
        parent = idx

        if left < n and arr[left] > arr[parent]:
            parent = left

        if right < n and arr[right] > arr[parent]:
            parent = right

        if parent != idx:
            arr[idx],arr[parent] = arr[parent],arr[idx]
            self.heapify(arr,parent,n)



solution = Solution()

print("数组{} 第 {} 个最大的元素为: {}".format(nums,k,solution.findKthLargest(nums,k)))