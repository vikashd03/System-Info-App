let os = require('os');
let gpuInfo = require('gpu-info');
let si = require('systeminformation');
let usage = require('usage');

console.log(os.cpus());

// console.log(os.freemem()/1073741824);

console.log(process);

console.log(process.cpuUsage());

console.log(os);
 
let pid = process.pid // you can use any valid PID instead
usage.lookup(pid, function(err, result) {
 
});

gpuInfo().then(function(data){
    console.log('GPUS: ',data);
});

si.diskLayout(function(data){
    console.log(data[0].size/1073741824+" GB");
    console.log(data);
    console.log(data[0].type+'D');
});

si.osInfo(function(data){
    console.log(data);
});

si.wifiNetworks(function(data){
    console.log(data);
});

si.networkInterfaces(function(data){
    console.log(data);
});

si.cpu(function(data){
    console.log(data.cache);
});

si.cpuCurrentspeed(function(data){
    console.log(data.max);
    console.log(data.min);
    console.log(data.cores);
});

si.battery(function(data){
    console.log(data.hasbattery);
});


