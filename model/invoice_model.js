var db=require('../dbconnection');
var invoice={
    getAllInvoice:function(callback){ 
        return db.query("select * from invoicetbl",callback);
    },
    addInvoice:function(item,callback){
      //  console.log("hello");
        date=new Date();
        //date.formate('%Y-%m-%d');
     //   console.log(item);
       return db.query("insert into invoicetbl (InvoiceDATE,InvoiceAMOUNT,TableNO,PaymentMODE) values(?,?,?,?)",[date,item.InvoiceAMOUNT,item.TableNO,item.PaymentMODE],callback);
    },
    getInvoiceByTable:function(Tableno,callback){
        return db.query("select i.*,id.*,it.* from invoicetbl i,invoicedetailtbl id,itemtbl it where i.InvoiceID=id.FKInvoiceID and id.FKItemID=it.ItemID and TableNO=?",[Tableno],callback);
    },
    getInvoiceByMode:function(mode,callback)
    { 
        console.log("hello");
            date1=new Date();
            //date1.formate('%Y-%m-%d');
        console.log(date1);
        //console.log(date1.now());
        return db.query("SELECT SUM(InvoiceAMOUNT) as 'total' FROM invoicetbl WHERE PaymentMODE=? and invoiceDATE=?",[mode,date1],callback);
    },
    getInvoiceByDate:function(mode,callback)
    {
        return db.query("select SUM(InvoiceAMOUNT) from invoicetbl where date(InvoiceDATE) between date('?') and date('?') and PaymentMODE=?",[mode],callback);
    }
};

module.exports=invoice;