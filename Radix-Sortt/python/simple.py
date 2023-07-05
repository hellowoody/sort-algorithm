import random

arr = [random.randint(0,120) for _ in range(6)]
# arr = [34, 119, 42, 59, 64, 56]
print(arr)

def sort(arr):
    max = arr[0]
    for v in arr:
        if v > max:
            max = v

    totalBits = len(str(max))
    sorted = [0]*len(arr)
    digit = 1
    for _ in range(totalBits):
        bucket = [0]*10
        for v in arr:
            bucketIdx = int(v/digit)%10
            bucket[bucketIdx] += 1
        for i in range(1,10):
            bucket[i] += bucket[i-1]
        for j in range(len(arr)-1,-1,-1):
            bucketIdx = int(arr[j]/digit)%10
            idx = bucket[bucketIdx] - 1
            sorted[idx] = arr[j]
            bucket[bucketIdx] -= 1
        arr = [v for v in sorted]
        digit *=10

    return arr


print(sort(arr))