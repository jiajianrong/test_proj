var RDS_PORT = 6379,
	RDS_HOST = '192.168.187.85',
	RDS_OPTS = {auth_pass:''};
	

var redis = require('redis'),
    client = redis.createClient( RDS_PORT, RDS_HOST, RDS_OPTS );
	

client.on('ready',function(err){
    console.log('ready');
	
    client.set('fe_test_redis_key', 'tttttest_by_fe', redis.print);
    client.get('fe_test_redis_key', redis.print);
});
