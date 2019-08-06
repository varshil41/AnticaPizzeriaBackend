var db=require('../dbconnection');

var employee={

    getAllEmployee:function(callback){
        return db.query("select * from employeetbl",callback);
    },
    addEmployee:function(item,filename,callback){
        return db.query("insert into employeetbl values(?,?,?,?,?,?,?,?,?)",[item.EmpID,item.EmpPASSWORD,item.EmpNAME,filename,item.EmpGENDER,item.EmpMOBILE,item.EmpCITY,item.EmpADDRESS,item.EmpCATEGORY],callback)
    },
    updateEmployee:function(item,callback){
        return db.query("update employeetbl set EmpNAME=?,EmpGENDER=?,EmpMOBILE=?,EmpCITY=?,EmpADDRESS=?,EmpCATEGORY=? where EmpID=?",[item.EmpNAME,item.EmpGENDER,item.EmpMOBILE,item.EmpCITY,item.EmpADDRESS,item.EmpCATEGORY,item.EmpID],callback);
    },
    deleteAllEmployee:function(item,callback){
        var id=[];
        for(let i=0;i<item.length;i++){
            id[i]=item[i].EmpID;
        }
        return db.query("delete from employeetbl where EmpID in (?)",[id],callback);
    },
    deleteEmployee(id,callback){
        return db.query("delete from employeetbl where EmpID=?",[id],callback);
    },
    getEmployeeByID:function(id,callback){
        return db.query("select * from employeetbl where EmpID=?",[id],callback);
    },
    updateWithEmployeeImage:function(item,filename,callback){
        return db.query("update employeetbl set EmpNAME=?,EmpIMG=?,EmpGENDER=?,EmpMOBILE=?,EmpCITY=?,EmpADDRESS=?,EmpCATEGORY=? where EmpID=?",[item.EmpNAME,filename,item.EmpGENDER,item.EmpMOBILE,item.EmpCITY,item.EmpADDRESS,item.EmpCATEGORY,item.EmpID],callback);
    },
    GetEmployeeByIdPassword:function(item,callback)
    {
            return db.query('select * from employeetbl where EmpID=? and EmpPASSWORD=?',[item.EmpID,item.EmpPASSWORD],callback);
    },
    ForgotPassword:function(EmpID,callback)
    {
            return db.query('select * from employeetbl where EmpID=?',[EmpID],callback);
    },
    changepass:function(item,callback){
        return db.query("update employeetbl set EmpPASSWORD=? where EmpID=?",[item.EmpPASSWORD,item.EmpID],callback);
    }
};

module.exports=employee;