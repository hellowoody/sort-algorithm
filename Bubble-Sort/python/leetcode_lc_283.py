nums = [0,1,0,3,12]


class Solution:
    def moveZeroes(self, nums) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        for i in range(0,len(nums)):
            for j in range(0,len(nums)-i):
                if(nums[j] == 0):
                    nums.remove(nums[j])
                    nums.append(0)
                    break


solution = Solution()

solution.moveZeroes(nums)

print(nums)