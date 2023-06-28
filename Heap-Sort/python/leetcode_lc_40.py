arr = [3,2,1]
k = 2

class Solution:
    def getLeastNumbers(self, arr, k):
        for i in range(int(len(arr)/2)-1,-1,-1):
            self.heapify(arr,i,len(arr))

        res = []

        for i in range(len(arr)-1,-1,-1):

            if k==0 :
                return res

            res.append(arr[0])
            arr[0],arr[i] = arr[i],arr[0]
            self.heapify(arr,0,i)
            k -= 1

        return res


    def heapify(self,arr,idx,n):
        left = 2*idx + 1
        right = 2*idx + 2
        parent = idx

        if left < n and arr[left] < arr[parent]:
            parent = left

        if right < n and arr[right] < arr[parent]:
            parent = right

        if parent != idx:
            arr[idx],arr[parent] = arr[parent],arr[idx]
            self.heapify(arr,parent,n)


solution = Solution()

print("数组{} 最小的 {} 个数: {}".format(arr,k,solution.getLeastNumbers(arr,k)))