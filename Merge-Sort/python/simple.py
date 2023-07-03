import random

arr = [random.randint(-20,30) for _ in range(6)]

print(arr)

def mergeSort(arr):
    if len(arr) < 2: 
        return arr
    
    mid = int(len(arr)/2)
    left = arr[0:mid]
    right = arr[mid:]

    return merge(mergeSort(left),mergeSort(right))


def merge(left,right):
    res = []

    while left and right:
        if left[0] <= right[0]:
            res.append(left.pop(0))
        else:
            res.append(right.pop(0))

    while left:
        res.append(left.pop(0))

    while right:
        res.append(right.pop(0))


    return res


print(mergeSort(arr))