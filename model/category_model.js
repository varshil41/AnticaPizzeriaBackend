var db=require('../dbconnection');
var category={
    getAllCategory:function(callback){
        return db.query("select * from categorytbl",callback);
    },
    addCategory:function(item,callback){
        return db.query("insert into categorytbl (CategoryNAME) values (?)",[item.CategoryNAME],callback);
    },
    deleteAllCategory:function(item,callback){
        var delarr=[];
        for(i=0;i<item.length;i++){
         
            delarr[i]=item[i].CategoryID;
        }
        //db.query("delete from dish_tbl where fk_cusines_id in (?)",[delarr]);
        return db.query("delete from categorytbl where CategoryID IN (?)",[delarr],callback);
        },
        updateCategory:function(id,item,callback){
            return db.query("update categorytbl set CategoryNAME=? where CategoryID=?",[item.CategoryNAME,id],callback);
        },
        getCategoryById:function(id,callback){
            return db.query("select * from categorytbl where CategoryID=?",[id],callback);
        },
        deleteOneCategory:function(id,callback){
            return db.query("delete from categorytbl where CategoryID=?",[id],callback);
        }

};
module.exports=category;