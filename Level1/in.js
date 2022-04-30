let id_list=["muzi", "frodo", "apeach", "neo"];
let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
let k = 2;

function solution(id_list,report,k){
    let reports = [...new Set(report)].map(a=>{return a.split(' ');});
    console.log(reports);
    let counts = new Map();
    for(const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1);
        console.log(counts);
    }
}
solution(id_list,report,k);