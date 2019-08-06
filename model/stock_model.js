var db=require('../dbconnection');

var stock={
    getAllStock:function(callback){
        return db.query("select * from stocktbl",callback);
    },
    GetStockById:function(id,callback){
        return db.query('select * from stocktbl where StockID=?',[id],callback);
    },
    AddStock:function(item,callback){
        return db.query('insert into stocktbl (StockNAME,StockQTY,StockALERT) values(?,?,?)',[item.StockNAME,item.StockQTY,item.StockALERT],callback);
    },
    UpdateStock:function(item,callback){
        return db.query('update stocktbl set StockNAME=?,StockQTY=?,StockALERT=? where StockID=?',[item.StockNAME,item.StockQTY,item.StockALERT,item.StockID],callback);
    },
    DeleteStock:function(id,callback){
        return db.query('delete from stocktbl where StockID=?',[id],callback);
    },
    DeleteMultiStock:function(item,callback){
        var arr = [];
        
        for(let i=0;i<item.length;i++){
            arr[i] = item[i].StockID;
        }
        return db.query('delete from stocktbl where StockID in (?)',[arr],callback);
    },
    getStockByIn:function(item,callback){
        console.log(item);
        return db.query("select * from stocktbl where StockID IN(?)",[item],callback);
    },
    UpdateStockWhenItemIsDone:function(item1,callback){
        console.log(item1);
        var queries='';
        item1.forEach(function (item) {
            queries+=db.format("UPDATE stocktbl set StockQTY=StockQTY-? where StockID=?",[item['StockQTY'],item['StockID']]);
        });
        return db.query(queries,callback);
    },
    getAlertStock:function(item,callback){
        let values=[];
        for(let i=0;i<item.length;i++){
            values[i]=item[i].StockID;
        }
        console.log(values);
        return db.query("SELECT * from stocktbl WHERE StockQTY<StockALERT and StockID IN (?)",[values],callback);
    },
    getAllAlertStock:function(callback){
        return db.query("SELECT * from stocktbl WHERE StockQTY<StockALERT",callback);
    }
};

module.exports=stock;