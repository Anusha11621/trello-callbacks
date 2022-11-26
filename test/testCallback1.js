const boards = require('../boards.json')
const {boardsData} = require('../callback1')

boardsData('mcu453ed',function(err,data){
    if (err){
        console.log(err);
    }
    else{
        console.log(data)
    }
},boards)