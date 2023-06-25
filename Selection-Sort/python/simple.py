import random;

arr = [random.randint(-20,50) for _ in range(10)]

print(arr)


def sort():
    for i in range(0,len(arr)-1):
        sortedLastIndex = i;
        for j in range(i+1,len(arr)):
            if arr[sortedLastIndex] > arr[j]:
                sortedLastIndex = j

        if sortedLastIndex != i:
            tmp = arr[i]
            arr[i] = arr[sortedLastIndex]
            arr[sortedLastIndex] = tmp

sort();

print(arr)
