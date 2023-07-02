class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        if len(nums) <= 1:
            return nums

        # 随机取数 避免因为pivot区分度不强造成的算法退化
        pivot = random.choice(nums)

        # O(n)划分
        left  = self.sortArray([x for x in nums if x < pivot])
        right = self.sortArray([x for x in nums if x > pivot])
        
        # 相同值保留 避免因为大量相同元素造成的算法退化
        mid  = [x for x in nums if x == pivot]

        return left + mid + right 
        