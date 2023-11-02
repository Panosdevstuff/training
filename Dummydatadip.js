exports.handler=function(context, event, callback) {
    let result = {};
  
    result.name='Yournamehere';
    result.accountId='123456';
    result.balanceEur='1337';
  
    callback(null, result);
  
  };
