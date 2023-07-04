arr1 = [2,3,1,3,2,4,6,7,9,2,19]
arr2 = [2,1,4,3,9,6]

class Solution:
    def relativeSortArray(self, arr1, arr2):
        
        for i in range(len(arr1)):
            if i == 0:
                max = arr1[i]
            if arr1[i] > max:
                max = arr1[i]

        bucket = self.countingHandler(arr1,max)
        idx = 0
        for i in range(len(arr2)):
            while bucket[arr2[i]]:
                arr1[idx] = arr2[i]
                idx+=1
                bucket[arr2[i]] -= 1

        for j in range(len(bucket)):
            while bucket[j]:
                arr1[idx] = j
                idx += 1
                bucket[j] -= 1
        
        return arr1


    def countingHandler(self,arr,max):
        bucket = [0]*(max+1)
        for i in range(len(arr)):
            if not bucket[arr[i]]:
                bucket[arr[i]] = 1
            else:
                bucket[arr[i]] += 1


        return bucket


solution = Solution()

print("arr1:{} \narr2:{} \n{} ".format(arr1,arr2,solution.relativeSortArray(arr1,arr2)))