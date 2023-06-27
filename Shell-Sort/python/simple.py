import random;

arr = [random.randint(-10,20) for _ in range(10)]

print(arr)

def sort():
    gap = int(len(arr)/2);

    while gap > 0:
        for i in range(gap,len(arr)):
            for j in range(i-gap,-1,-gap):
                if arr[j] > arr[j+gap] :
                    arr[j],arr[j+gap] = arr[j+gap],arr[j]

        gap = int(gap/2);


sort()

print(arr)
