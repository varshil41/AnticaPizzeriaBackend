var db=require('../dbconnection');

var ordertemp={
    getAllOrder:function(callback){
        return db.query("select o.*,i.* from ordertemptbl o,itemtbl i where o.FKItemId=i.ItemID ORDER BY OrderID DESC ",callback);
    },
    addOrder:function(item,callback){
        var items=[];
        return db.query("insert into ordertemptbl (FKItemID,OrderQty,OrderPRICE,OrderStatus,TableNO,FKEmpID,OrderREMARK) values (?,?,?,?,?,?,?)",[item.FKItemID,item.OrderQty,item.OrderPRICE,item.OrderStatus,item.TableNO,item.FKEmpID,item.OrderREMARK],callback);
    },
    getAllOrderByTable:function(no,callback){
        return db.query('select o.*,i.* from ordertemptbl o,itemtbl i where o.FKItemId=i.ItemID and o.TableNo=?',[no],callback);
    },
    getOrderByStatus:function(status,callback){
        return db.query("select o.*,i.* from ordertemptbl o,itemtbl i where o.FKItemId=i.ItemID and o.OrderStatus=? ORDER BY OrderID DESC",[status],callback);
    },
    deleteOrder:function(id,callback)
    {
        return db.query("delete from ordertemptbl where OrderID=?",[id],callback);
    },
    updateOrder:function(item,callback)
    {
        return db.query("update  ordertemptbl set OrderStatus=? where OrderID=?",[item.OrderStatus,item.OrderID],callback);
    },
    updateqtyremarkorder:function(item,callback)
    {
        return db.query("update ordertemptbl set OrderQty=?,OrderREMARK=? where OrderID=?",[item.OrderQty,item.OrderREMARK,item.OrderID],callback);
    }
};

module.exports=ordertemp;