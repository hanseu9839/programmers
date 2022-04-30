let id_list=["muzi", "frodo", "apeach", "neo"];
let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
let k = 2;

function solution(id_list,report,k){
    let reports = [...new Set(report)].map(a=>{return a.split(' ');});//...new Set 같은 배열을 불러와줌
    let counts = new Map();
    for(const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1);//bad[1]을 불러오면 기존에 있던 1이 불러와짐 즉, bad[1]에 1값이 있다면 1+1 이됨 
    }
  
    let good = new Map();
    for(const report of reports){
       if(counts.get(report[1])>=k){
           good.set(report[0],good.get(report[0])+1||1);// 해당하는 사용자에 신고한 사람을 1나씩 넣어줌 그러면 신고된 사람을 알 수 있음. 
       }
       console.log(good);
    }
    let answer = id_list.map(a=>good.get(a)||0);
    return answer
}
solution(id_list,report,k);