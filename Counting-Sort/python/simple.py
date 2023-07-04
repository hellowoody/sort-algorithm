import random

arr = [random.randint(-20,50) for _ in range(6)]

print(arr)

def sort():
    max = -1;
    for i in range(len(arr)):
        if i == 0 :
            max = arr[i]
        
        if arr[i] > max :
            max = arr[i]

    res = countingSort(arr,max)
    print(res)

def countingSort(arr,max):

    bucket = [0]*(max+1)
    idx = 0
    
    for i in range(len(arr)):
        if not bucket[arr[i]]:
            bucket[arr[i]] = 1
        else:
            bucket[arr[i]] += 1

    for j in range(max+1):
        while bucket[j]:
            arr[idx] = j
            idx+=1
            bucket[j] -= 1

    return arr


sort()