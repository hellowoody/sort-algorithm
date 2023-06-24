nums = [3,30,34,5,9]

class Solution:
    def minNumber(self, nums) -> str:
        nums = [str(v) for v in nums]
        for i in range(0,len(nums)):
            for j in range(1,len(nums)-i):
                if nums[j-1]+nums[j] > nums[j]+nums[j-1]:
                    nums[j-1],nums[j] = nums[j],nums[j-1]

        return "".join(nums)
    
solution = Solution()

print(solution.minNumber(nums))