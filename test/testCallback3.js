const lists = require('../lists.json');
const cards = require('../cards.json');
const {cardsData} = require('../callback3')
cardsData('qwsa221',function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
},lists,cards)