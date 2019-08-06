var db=require('../dbconnection');

var order={
    getAllOrder:function(callback){
        return db.query("select o.*,i.* from ordertbl o,itemtbl i where o.FKItemId=i.ItemID ORDER BY OrderID DESC",callback);
    },
    addOrder:function(item,callback){
            var items=[];
           return db.query("insert into ordertbl (FKItemID,OrderQty,OrderPRICE,OrderStatus,TableNO,FKEmpID,OrderREMARK) values(?,?,?,?,?,?,?)",[item.FKItemID,item.OrderQty,item.OrderPRICE,item.OrderStatus,item.TableNO,item.FKEmpID,item.OrderREMARK],callback);
    },
    getAllOrderByTable:function(no,callback){
        return db.query('select o.*,i.* from ordertbl o,itemtbl i where o.FKItemId=i.ItemID and o.TableNo=?',[no],callback);
    },
    getOrderByStatus:function(status,callback){
        return db.query("select o.*,i.* from ordertbl o,itemtbl i where o.FKItemId=i.ItemID and o.OrderStatus=? ORDER BY OrderID DESC",[status],callback);
    },
    deleteOrder:function(item,callback)
    {
        values=[];
        for(let i=0;i<item.length;i++){
            values[i]=item[i].OrderID;
        }
        return db.query("delete from ordertbl where OrderID IN (?)",[values],callback);
    },
    updateOrder:function(item,callback)
    {
        return db.query("update  ordertbl set OrderStatus=? where OrderID=?",[item.OrderStatus,item.OrderID],callback);
    },
    deleteOneOrder:function(id,callback){
        return db.query("delete from ordertbl where OrderID=?",[id],callback);
    }
};

module.exports=order;