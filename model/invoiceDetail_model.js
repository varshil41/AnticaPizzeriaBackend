var db=require('../dbconnection');
var invoicedetail={
    
    getInvoiceDetailById(id,callback){
        return db.query("select i.*,id.*,it.* from invoicetbl i,invoicedetailtbl id,itemtbl it where id.FKItemID=it.itemID AND i.InvoiceID=id.FKInvoiceID AND i.InvoiceID=?",[id],callback);
    },
    addInvoiceDetail:function(id,item,callback){
        console.log(id);
        console.log(item.length);
        var value=[];
        for(i=0;i<item.length;i++){
            value[i]=[item[i].OrderQty,item[i].itemPRICE,id,item[i].itemID];    
             }
         console.log(value);
           return db.query("INSERT into invoicedetailtbl (InvoiceDetQTY,InvoiceDetPrice,FKInvoiceID,FKItemID) VALUES ?",[value],callback);
        }

};
module.exports=invoicedetail;