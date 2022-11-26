
const {boardsData} = require('./callback1')
const {listData} = require('./callback2')
const {cardsData} = require('./callback3')


function problem4 (boardName,listNames,boards,lists,cards) {

    let requireboardID = boards.filter((id)=>id["name"]==boardName)[0]["id"]; 
    let requirelistID = lists[requireboardID].reduce((accum,cv)=>{
        if (listNames.includes(cv["name"])) {
            accum.push(cv["id"]);
        }
        return accum;
    },[])

    setTimeout(()=>{
        boardsData(requireboardID,(x)=>{
            console.log(x)
        },boards)
        listData(requireboardID,(x)=>{
            console.log(x)
        },lists)
        cardsData(requirelistID,(x)=>{
            console.log(x)
        },lists,cards)
    },0000)}


module.exports = {problem4}