const lottos = [44,1,0,0,31,25];
const win_nums = [31,10,45,1,6,19];

const rank = [6,6,5,4,3,2,1];

function solution(lottos, win_nums){
    let minCount = lottos.filter(v=>win_nums.includes(v)).length;
    let maxCount = minCount + lottos.filter(v=>!v).length;

    return [rank[maxCount],rank[minCount]];
}

const answer=solution(lottos,win_nums);
console.log(answer);
