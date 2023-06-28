import random

arr = [random.randint(-20,50) for _ in range(6)]

print(arr)

def sort():
    for i in range(int(len(arr)/2)-1,-1,-1):
        heapify(arr,i,len(arr))

    for i in range(len(arr)-1,-1,-1):
        arr[0],arr[i] = arr[i],arr[0]
        heapify(arr,0,i)


def heapify(arr,idx,n):
    left = 2*idx + 1
    right = 2*idx + 2
    parent = idx

    if left < n and arr[left] > arr[parent]:
        parent = left

    if right < n and arr[right] > arr[parent]:
        parent = right

    if parent != idx:
        arr[idx],arr[parent] = arr[parent],arr[idx]
        heapify(arr,parent,n) 



sort()

print(arr)
