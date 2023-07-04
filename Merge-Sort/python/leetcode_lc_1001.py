A = [1,2,3,0,0,0]
m = 3
B = [2,5,6]
n = 3

class Solution:
    def merge(self, A, m, B, n) :
        """
        Do not return anything, modify A in-place instead.
        """
        i = m - 1
        j = n - 1
        idx = len(A) - 1

        while i >= 0 and j >= 0:
            if A[i] <= B[j]:
                A[idx] = B[j]
                j -= 1
                idx -= 1
            else:
                A[idx] = A[i]
                i -= 1
                idx -= 1

        while j >= 0 :
            A[idx] = B[j]
            j -= 1
            idx -= 1


solution = Solution()
solution.merge(A,m,B,n)

print(A)
