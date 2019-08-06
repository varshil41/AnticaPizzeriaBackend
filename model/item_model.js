var db=require('../dbconnection');

var item={

    getAllItems:function(callback){
        return db.query("select i.*,c.categoryNAME from itemtbl i,categorytbl c where i.fkCategoryID=c.categoryID",callback);
    },
    addItems:function(item,filename,callback){
        return db.query("insert into itemtbl(itemNAME,itemPRICE,itemINGREDIENTS,itemIMG,fkCategoryID,itemPREPARETIME,itemTYPE) values(?,?,?,?,?,?,?)",[item.itemNAME,item.itemPRICE,item.itemINGREDIENTS,filename,item.fkCategoryID,item.itemPREPARETIME,item.itemTYPE],callback);
    },
    deleteAllItem:function(item,callback){
        var id=[];
        console.log(item);
        for(let i=0;i<item.length;i++){
            id[i]=item[i].itemID;
        }
        console.log(id);
        return db.query("delete from itemtbl where itemID in (?)",[id],callback);
    },
    deleteItem(id,callback){
        return db.query("delete from itemtbl where itemID=?",[id],callback);
    },
    getItemByName(name,callback){
        return db.query("select * from itemtbl where itemNAME=?",[name],callback);
    },
    getItemByID(id,callback){
        return db.query("select i.*,c.categoryNAME from itemtbl i,categorytbl c where i.fkCategoryID=c.categoryID and i.itemID=?",[id],callback);
    },
    getItemByNotID(id,callback){
        return db.query("select i.*,c.categoryNAME from itemtbl i,categorytbl c where i.fkCategoryID=c.categoryID and i.fkCategoryID NOT IN(?)",[id],callback);
    },
    updateItem(item,callback){
        console.log(item);
        return db.query("update itemtbl set itemNAME=?,itemPRICE=?,itemINGREDIENTS=?,itemTYPE=?,itemPREPARETIME=?,fkCategoryID=? where itemID=?",[item.itemNAME,item.itemPRICE,item.itemINGREDIENTS,item.itemTYPE,item.itemPREPARETIME,item.fkCategoryID,item.itemID],callback);

    },
    updateItemWithImage(item,filename,callback){
        console.log(item);
        return db.query("update itemtbl set itemNAME=?,itemIMG=?,itemPRICE=?,itemINGREDIENTS=?,itemTYPE=?,itemPREPARETIME=?,fkCategoryID=? where itemID=?",[item.itemNAME,filename,item.itemPRICE,item.itemINGREDIENTS,item.itemTYPE,item.itemPREPARETIME,item.fkCategoryID,item.itemID],callback);
    },
 
    getItemByType(item,id,callback){
        return db.query('select * from itemtbl where itemTYPE=? and fkCategoryID=?',[item,id],callback);
    }
};

module.exports=item;