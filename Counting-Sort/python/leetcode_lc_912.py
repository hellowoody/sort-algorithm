nums = [1,1,5,0,2,0]

print(nums)

class Solution:
    def sortArray(self, nums):
        
        for i in range(len(nums)):
            if i == 0:
                max = min = nums[i]
            if nums[i] > max:
                max = nums[i]
            if nums[i] < min:
                min = nums[i]

        if min < 0:   
            nums = [v-min for v in nums]
            max -= min
        else:
            min = 0

        return self.countingSort(nums,max,min)

    def countingSort(self,arr,max,min):
        bucket = [0]*(max+1)
        idx = 0
        for i in range(len(arr)):
            if not bucket[arr[i]]:
                bucket[arr[i]] = 1
            else:
                bucket[arr[i]] += 1

        for j in range(max+1):
            while bucket[j]:
                arr[idx] = j + min
                idx += 1
                bucket[j] -= 1

        return arr


solution = Solution()

print("升序{}".format(nums,solution.sortArray(nums)))
