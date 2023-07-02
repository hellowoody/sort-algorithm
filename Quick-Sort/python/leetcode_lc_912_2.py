class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        random.shuffle(nums)
        self.quickSort(nums,0,len(nums)-1)
        return nums

    def quickSort(self,arr,start,end):

        if start >= end:
            return 

        leftIdx,rightIdx = self.partition(arr,start,end)

        self.quickSort(arr,start,leftIdx-1)
        self.quickSort(arr,rightIdx,end)


    def partition(self,arr,start,end):
        leftIdx = start
        rightIdx = end + 1
        i = start+1
        pivot = arr[start]

        while i < rightIdx : 
            if arr[i] < pivot :
                if arr[i] != arr[leftIdx+1] :
                    arr[leftIdx+1] , arr[i] = arr[i] , arr[leftIdx+1]
                leftIdx+=1
                i+=1
            elif arr[i] > pivot:
                arr[i],arr[rightIdx-1] = arr[rightIdx-1],arr[i]
                rightIdx-=1
            else:
                i+=1

        arr[start] = arr[leftIdx]
        arr[leftIdx] = pivot

        return leftIdx,rightIdx