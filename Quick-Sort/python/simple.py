import random

arr = [random.randint(-20,50) for _ in range(5)]

arr = [5,1,1,2,0,0]

print(arr)

def quickSort(arr,start,end):

    if start >= end:
        return 
    
    pivotIdx = partition(arr,start,end)
    
    quickSort(arr,start,pivotIdx-1)
    quickSort(arr,pivotIdx+1,end)



def partition(arr,start,end):
    leftIdx = start
    rightIdx = end

    pivot = arr[start]

    while leftIdx < rightIdx :
        while arr[rightIdx] > pivot and leftIdx < rightIdx:
            rightIdx -= 1

        while arr[leftIdx] <= pivot and leftIdx < rightIdx:
            leftIdx += 1

        if leftIdx < rightIdx:
            arr[leftIdx],arr[rightIdx] = arr[rightIdx],arr[leftIdx]
            rightIdx-=1
    

    arr[start] = arr[leftIdx]
    arr[leftIdx] = pivot

    return leftIdx

quickSort(arr,0,len(arr)-1)

print(arr)
