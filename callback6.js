
const {boardsData} = require('./callback1')
const {listData} = require('./callback2')
const {cardsData} = require('./callback3')


function problem6 (boardName,boards,lists,cards) {

    let requireboardID = boards.filter((id)=>id["name"]==boardName)[0]["id"]; 
    let requirelistID = lists[requireboardID].reduce((accum,cv)=>{
        accum.push(cv["id"]);
        return accum;
    },[])
    setTimeout(()=>{
        boardsData(requireboardID,(id)=>{
            console.log(id)
        },boards)
        listData(requireboardID,(listid)=>{
            console.log(listid)
        },lists)
        for(let el of requirelistID){
            cardsData(el, (li) => {
                console.log(li)
            },lists,cards)
        }
    },0000)}

module.exports= {problem6}