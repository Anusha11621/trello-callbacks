const lists = require('../lists.json');
const {listData} = require('../callback2')
listData('mcu453ed',function(err,data){
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
},lists)