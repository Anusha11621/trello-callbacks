

function boardsData(id,callback,board){
    
    setTimeout(()=>{
        let result = board.filter((data) => id == data.id? data:null)[0]
        callback(result)
    },2000)
}

module.exports = {boardsData}
