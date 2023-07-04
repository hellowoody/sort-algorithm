nums = [7,5,6,4]

class Solution:
    count=0
    def reversePairs(self, nums):
        self.mergeSort(nums)
        return self.count

    def mergeSort(self,nums):
        if len(nums) < 2:
            return nums
        
        mid = int(len(nums)/2)
        left = nums[0:mid]
        right = nums[mid:]

        return self.merge(self.mergeSort(left),self.mergeSort(right))

    def merge(self,left,right):
        res = []
        i = j = 0
        while i < len(left) and j < len(right):
            if left[i] <= right[j]:
                res.append(left[i])
                i += 1
            else:
                for idx in range(i,len(left)):
                    print("***逆序对:",left[idx],right[j])
                res.append(right[j])
                j += 1
                self.count += len(left) - i

        while i < len(left):
            res.append(left[i])
            i += 1

        while j < len(right):
            res.append(right[j])
            j += 1

        return res


solution = Solution()

print("数组{}中,逆序对的总数:{}".format(nums,solution.reversePairs(nums)))