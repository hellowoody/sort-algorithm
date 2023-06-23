import random;

arr = [random.randint(-20,50) for _ in range(10)]

print(arr)

def sort():
    for i in range(0,len(arr)):
        for j in range(i+1,len(arr)):
            if arr[i] > arr[j] :
                arr[i],arr[j] = arr[j],arr[i]
                

sort()
print("sorted:",arr)