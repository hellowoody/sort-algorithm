score = [10,3,8,9,4]

class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        sorted = score[:];
        gap = int(len(sorted)/2);

        while gap > 0:

            for i in range(gap,len(sorted)):
                for j in range(i-gap,-1,-gap):
                    if sorted[j] < sorted[j+gap]:
                        sorted[j],sorted[j+gap] = sorted[j+gap],sorted[j];

            gap = int(gap/2);

        answer = []
        for item in score:
            v = sorted.index(item);
            if v == 0:
                answer.append("Gold Medal")
            elif v == 1:
                answer.append("Silver Medal")
            elif v == 2:
                answer.append("Bronze Medal")
            else:
                answer.append(str(v+1))

        return answer;


solution = Solution()
print(score)
print(solution.findRelativeRanks(score))