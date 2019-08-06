var db=require('../dbconnection');

var charity={
    getAllNgo:function(callback){
        return db.query("select * from charitytbl",callback);
    },
    InsertNgo:function(item,callback){
        return db.query("insert into charitytbl values(?,?,?,?)",[item.CharityID,item.CharityNAME,item.CharityADDRESS,item.CharityMOBILE],callback);
    },
    getNgoById:function(id,callback){
        return db.query("select * from charitytbl where CharityID=?",[id],callback);
    },
    deleteNgo:function(id,callback){
        return db.query("delete from charitytbl where CharityID=?",[id],callback);
    },
    updateNgo:function(item,callback){
        console.log(item);
        return db.query("update charitytbl set CharityNAME=?,CharityADDRESS=?,CharityMOBILE=? where CharityID=?",[item.CharityNAME,item.CharityADDRESS,item.CharityMOBILE,item.CharityID],callback);
    },
    deleteAllCharity:function(item,callback){
        var id=[];
        console.log(item);
        for(let i=0;i<item.length;i++){
            id[i]=item[i].CharityID;
        }
        console.log(id);
        return db.query("delete from charitytbl where CharityID in (?)",[id],callback);
    }
    
};

module.exports=charity;