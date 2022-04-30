let id_list=["muzi", "frodo", "apeach", "neo"];
let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
let k = 2;


function soloution(id_list,report,k){
    var answer = new Array(id_list.length);
    answer.fill(0);
    const list = {};
    id_list.map((user)=>{
        list[user]=[];
        
    })
    report.map((user)=>{
        const [user_id,report_id] = user.split(" ");
        if(!list[report_id].includes(user_id)){
           list[report_id].push(user_id);
        } // list[report_id].push(user_id) 
    });
    for(const key in list){
        if(list[key].length>=k)
        {
            list[key].map((user)=>{
                 answer[id_list.indexOf(user)]+=1;
            })
        }
    }
    return answer;
}

const answer=soloution(id_list,report,k);
console.log(answer);