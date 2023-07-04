import random

arr = [random.randint(-20,50) for _ in range(5)]

print(arr)


def mergeSort(arr):

    if len(arr) < 2 :
        return arr

    mid = int(len(arr)/2)
    left = arr[0:mid]
    right = arr[mid:]

    return merge(mergeSort(left),mergeSort(right))


def merge(left,right):
    res = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            res.append(left[i])
            i += 1
        else:
            res.append(right[j])
            j += 1

    while i < len(left):
        res.append(left[i])
        i += 1

    while j < len(right):
        res.append(right[j])
        j += 1


    return res


print(mergeSort(arr))