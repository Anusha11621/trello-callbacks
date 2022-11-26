

function listData(id,callback,list){
   setTimeout(()=>{
    let result = []
    for(let ids in list){
        if (id == ids){
            result=(list[ids])
        }
    }
    callback(result)
   },2000)
}
 module.exports = {listData}