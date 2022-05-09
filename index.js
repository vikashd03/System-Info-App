let os = require('os');
let gpuInfo = require('gpu-info');
let si = require('systeminformation');
let usage = require('usage');

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let btn = [];
let detail = [];
let x,c;
let y = 5;

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


for (let i = 1; i <= 10; i++) {
    x = i.toString();
    btn[i] = document.querySelector('.btn'+x);
}

for (let j = 1; j <= 10; j++) {
    x = j.toString();
    detail[j] = document.querySelector('.detail'+x);
}

detail[1].classList.toggle('active');

for (let k = 1; k <= 10; k++) {
    btn[k].addEventListener('click',() => {
            detail[k].classList.add('active');
            for (let f = 1; f <= 10; f++) {
                if (f!==k) {
                    detail[f].classList.remove('active');
                }
            }
    });   
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// variables:-


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

si.osInfo(function(data){
    document.querySelector(".detail1 #detail-body .info1 .content1").innerHTML = data.distro;
});

si.cpu(function(data){
    document.querySelector(".detail1 #detail-body .info2 .content2").innerHTML = data.manufacturer+" "+data.brand;
});

gpuInfo().then(function(data){
    document.querySelector(".detail1 #detail-body .info3 .content3").innerHTML = data[0].Description;
});

si.mem(function(data){
    document.querySelector(".detail1 #detail-body .info4 .content4 #ram-size").innerHTML = data.total/1073741824+" GB_";
});

si.memLayout(function(data){
    document.querySelector(".detail1 #detail-body .info4 .content4 #ram-clockspeed").innerHTML = data[0].type+"_"+data[0].clockSpeed+" MHz";
});

si.system(function(data){
    document.querySelector(".detail1 #detail-body .info5 .content5").innerHTML = data.manufacturer+" "+data.model;
});

si.diskLayout(function(data){
    document.querySelector(".detail1 #detail-body .info6 .content6").innerHTML =data[0].size/1073741824+" GB "+data[0].vendor+" "+data[0].name+" ("+data[0].interfaceType+")";
});

si.battery(function(data){
    if(data.hasbattery === "true"){
        document.querySelector(".detail1 #detail-body .info7 .content7").innerHTML = data.maxcapacity+" Mah "+data.manufacturer+" "+data.model;
    }
    else{
        document.querySelector(".detail1 #detail-body .info7 .content7").innerHTML = "Battery not found...!"
    }
});

si.networkInterfaces(function(data){
    if(data[0].operstate === "up"){
        document.querySelector(".detail1 #detail-body .info8 .content8").innerHTML = "You are connected to Internet via "+data[0].iface;
    }
    else{
        document.querySelector(".detail1 #detail-body .info8 .content8").innerHTML = "You are not connected to Internet...!";
    }
});


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

detail[1].innerHTML = `<div class="detail-head detail-head1"><img src="./img/summary.png" height="30px" width="30px"><p class="head-text head-text1">  Summary</p></div><br>
<div id="detail-body">
<div class="info info1">
<div class="sub-title"><img src="./img/os-logo.png" height="20px" width="20px"><p>  Os</p></div>
<div class="content content1"></div>
</div>
<div class="info info2">
<div class="sub-title"><img src="./img/cpu-logo.png" height="20px" width="20px"><p>  Cpu</p></div>
<div class="content content2"></div>
</div>
<div class="info info3">
<div class="sub-title"><img src="./img/graphics-logo.png" height="20px" width="20px"><p>  Gpu</p></div>
<div class="content content3"></div>
</div>
<div class="info info4">
<div class="sub-title"><img src="./img/ram-logo.png" height="20px" width="20px"><p>  Ram</p></div>
<div class="content content4"><p id="ram-size"></p><p id="ram-clockspeed"></p></div>
</div>
<div class="info info5">
<div class="sub-title"><img src="./img/motherboard-logo.png" height="20px" width="20px"><p>  Motherboard</p></div>
<div class="content content5"></div>
</div>
<div class="info info6">
<div class="sub-title"><img src="./img/storage.png" height="20px" width="20px"><p>  Storage</p></div>
<div class="content content6"></div>
</div>
<div class="info info7">
<div class="sub-title"><img src="./img/battery.png" height="20px" width="20px"><p>  Battery</p></div>
<div class="content content7"></div>
</div>
<div class="info info8">
<div class="sub-title"><img src="./img/internet.png" height="20px" width="20px"><p>  Network</p></div>
<div class="content content8"></div>
</div>
<div class="info info9">
<div class="sub-title"><img src="./img/about.png" height="20px" width="20px"><p>  About</p></div>
<div class="content content9">Creator: Vikash</div>
</div>
</div>`

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
detail[2].innerHTML = `<div class="detail-head detail-head2"><img src="./img/os-logo.png" height="30px" width="30px"><p class="head-text head-text2">  Os</p></div>
<div id="detail-body">
<div class="info info1">
<div class="sub-title"></div>
<div class="content content1"></div>
</div>
<div class="info info2">
<div class="sub-title"></div>
<div class="content content2"></div>
</div>
<div class="info info3">
<div class="sub-title"></div>
<div class="content content3"></div>
</div>
<div class="info info4">
<div class="sub-title"></div>
<div class="content content4"></div>
</div>
<div class="info info5">
<div class="sub-title"></div>
<div class="content content5"></div>
</div>
</div>`

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
detail[3].innerHTML = `<div class="detail-head detail-head3"><img src="./img/cpu-logo.png" height="30px" width="30px"><p class="head-text head-text3">  Cpu</p></div>
<div id="detail-body">
<div class="info info1">
<div class="sub-title"></div>
<div class="content content1"></div>
</div>
<div class="info info2">
<div class="sub-title"></div>
<div class="content content2"></div>
</div>
<div class="info info3">
<div class="sub-title"></div>
<div class="content content3"></div>
</div>
<div class="info info4">
<div class="sub-title"></div>
<div class="content content4"></div>
</div>
<div class="info info5">
<div class="sub-title"></div>
<div class="content content5"></div>
</div>
</div>`

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
detail[4].innerHTML = `<div class="detail-head detail-head4"><img src="./img/graphics-logo.png" height="30px" width="30px"><p class="head-text head-text4">  Gpu</p></div>
<div id="detail-body">
<div class="info info1">
<div class="sub-title"></div>
<div class="content content1"></div>
</div>
<div class="info info2">
<div class="sub-title"></div>
<div class="content content2"></div>
</div>
<div class="info info3">
<div class="sub-title"></div>
<div class="content content3"></div>
</div>
<div class="info info4">
<div class="sub-title"></div>
<div class="content content4"></div>
</div>
<div class="info info5">
<div class="sub-title"></div>
<div class="content content5"></div>
</div>
</div>`

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
detail[5].innerHTML = `<div class="detail-head detail-head5"><img src="./img/ram-logo.png" height="25px" width="40px"><p class="head-text head-text5">  Ram</p></div>
<div id="detail-body">
<div class="info info1">
<div class="sub-title"></div>
<div class="content content1"></div>
</div>
<div class="info info2">
<div class="sub-title"></div>
<div class="content content2"></div>
</div>
<div class="info info3">
<div class="sub-title"></div>
<div class="content content3"></div>
</div>
<div class="info info4">
<div class="sub-title"></div>
<div class="content content4"></div>
</div>
<div class="info info5">
<div class="sub-title"></div>
<div class="content content5"></div>
</div>
</div>`

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
detail[6].innerHTML = `<div class="detail-head detail-head6"><img src="./img/motherboard-logo.png" height="30px" width="30px"><p class="head-text head-text6">  Motherboard</p></div>
<div id="detail-body">
<div class="info info1">
<div class="sub-title"></div>
<div class="content content1"></div>
</div>
<div class="info info2">
<div class="sub-title"></div>
<div class="content content2"></div>
</div>
<div class="info info3">
<div class="sub-title"></div>
<div class="content content3"></div>
</div>
<div class="info info4">
<div class="sub-title"></div>
<div class="content content4"></div>
</div>
<div class="info info5">
<div class="sub-title"></div>
<div class="content content5"></div>
</div>
</div>`

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
detail[7].innerHTML = `<div class="detail-head detail-head7"><img src="./img/storage.png" height="30px" width="30px"><p class="head-text head-text7">  Storage</p></div>
<div id="detail-body">
<div class="info info1">
<div class="sub-title"></div>
<div class="content content1"></div>
</div>
<div class="info info2">
<div class="sub-title"></div>
<div class="content content2"></div>
</div>
<div class="info info3">
<div class="sub-title"></div>
<div class="content content3"></div>
</div>
<div class="info info4">
<div class="sub-title"></div>
<div class="content content4"></div>
</div>
<div class="info info5">
<div class="sub-title"></div>
<div class="content content5"></div>
</div>
</div>`


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
detail[8].innerHTML = `<div class="detail-head detail-head8"><img src="./img/battery.png" height="30px" width="30px"><p class="head-text head-text8">  Battery</p></div>
<div id="detail-body">
<div class="info info1">
<div class="sub-title"></div>
<div class="content content1"></div>
</div>
<div class="info info2">
<div class="sub-title"></div>
<div class="content content2"></div>
</div>
<div class="info info3">
<div class="sub-title"></div>
<div class="content content3"></div>
</div>
<div class="info info4">
<div class="sub-title"></div>
<div class="content content4"></div>
</div>
<div class="info info5">
<div class="sub-title"></div>
<div class="content content5"></div>
</div>
</div>`


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
detail[9].innerHTML = `<div class="detail-head detail-head9"><img src="./img/internet.png" height="30px" width="30px"><p class="head-text head-text8">  Network</p></div>
<div id="detail-body">
<div class="info info1">
<div class="sub-title"></div>
<div class="content content1"></div>
</div>
<div class="info info2">
<div class="sub-title"></div>
<div class="content content2"></div>
</div>
<div class="info info3">
<div class="sub-title"></div>
<div class="content content3"></div>
</div>
<div class="info info4">
<div class="sub-title"></div>
<div class="content content4"></div>
</div>
<div class="info info5">
<div class="sub-title"></div>
<div class="content content5"></div>
</div>
</div>`


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
detail[10].innerHTML = `<div class="detail-head detail-head10"><img src="./img/about.png" height="30px" width="30px"><p class="head-text head-text10">  About</p></div>
<div id="detail-body">
<div class="info info1">
<div class="sub-title"></div>
<div class="content content1"></div>
</div>
<div class="info info2">
<div class="sub-title"></div>
<div class="content content2"></div>
</div>
<div class="info info3">
<div class="sub-title"></div>
<div class="content content3"></div>
</div>
<div class="info info4">
<div class="sub-title"></div>
<div class="content content4"></div>
</div>
<div class="info info5">
<div class="sub-title"></div>
<div class="content content5"></div>
</div>
</div>`
