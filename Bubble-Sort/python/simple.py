import random;

arr = [random.randint(-20,50) for _ in range(10)]

print(arr)

def sort():
    for i in range(0,len(arr)):
        for j in range(1,len(arr)-i):
            if arr[j-1] > arr[j] :
                arr[j-1],arr[j] = arr[j],arr[j-1]
                

sort()
print("sorted:",arr)