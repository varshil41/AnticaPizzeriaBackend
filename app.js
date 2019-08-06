var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var category=require('./routes/category_route');
var category1=require('./routes/category1_route');
var employee=require('./routes/employee_route');
var employee1=require('./routes/employee1_route');
var updatewithemployeeprofile=require('./routes/updateEmployeeProfile_route');
var items=require('./routes/item_route');
var items1=require('./routes/item1_route');
var items2=require('./routes/item2_route');
var deleteallitems=require('./routes/deleteAllItem_route');
var stock=require('./routes/stock_route');
var stock1=require('./routes/stockdeleteall_route');
var getstockbyin=require('./routes/GetstockByin_route');
var loginemp=require('./routes/loginemployee_route');
var emailvarify=require('./routes/emailvarify_route');
var invoice=require('./routes/invoice_route');
var invoice1=require('./routes/invoice1_route');
var invoicedetail=require('./routes/invoiceDetail_route');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var order=require('./routes/order_route');
var order1=require('./routes/order1_route');
var ordertemp=require('./routes/ordertemp_route');
var ordertemp1=require('./routes/ordertemp1_route');
var charity=require('./routes/charity_route');
var deleteallcharity=require('./routes/deleteAllCharity');
var updatealertstock=require('./routes/stockupdateandAlert_route');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category',category);
app.use('/category1',category1);
app.use('/employee',employee);
app.use('/employee1',employee1);
app.use('/updateWithImage',updatewithemployeeprofile);
app.use('/item',items);
app.use('/item1',items1);
app.use('/item2',items2);
app.use('/deleteallitem',deleteallitems);
app.use('/stock',stock);
app.use('/stock1',stock1);
app.use('/getstockbyin',getstockbyin);
app.use('/loginemp',loginemp);
app.use('/emailvarify',emailvarify);
app.use('/invoice',invoice);
app.use('/invoice1',invoice1);
app.use('/invoicedetail',invoicedetail);
app.use('/order',order);
app.use('/order1',order1);
app.use('/ordertemp',ordertemp);
app.use('/ordertemp1',ordertemp1);
app.use('/charity',charity);
app.use('/deleteallcharity',deleteallcharity);
app.use('/updatealertstock',updatealertstock);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;