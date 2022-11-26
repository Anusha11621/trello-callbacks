

function cardsData(id,callback,lists,cards){
setTimeout(() => {
    let result =[]
    let keys= Object.keys(lists);
    keys.map((key)=>{
        lists[key].map((list) =>{
            if (list.id == id){
                for(let ids in cards){
                    if(ids == id){
                        result= [...cards[ids]]
                    }
                }
            }
        })
    })
    callback(result)
},2000)
}

module.exports = {cardsData}