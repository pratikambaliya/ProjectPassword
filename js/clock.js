var d, h, m, s, clock, clr;

function clockf() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    if (h <= 9) {
        h = '0' + h;
    }
    if (m <= 9) {
        m = '0' + m;
    }
    if (s <= 9) {
        s = '0' + s;
    }

    // clock = h + ":" + m + ":" + s;
    clr = "#" + m + s +(s)*2
      var clr2 = "#"+ s+m+(s)*3;
    //    clr=clr1+clr2;
    // console.log(h);
    // document.getElementById("cl").innerHTML = clock;
    // console.log(clock)
    document.getElementById("txtClock1").value = h;
    document.getElementById("txtClock2").value = m;
    document.getElementById("txtClock3").value = s;
    
//       document.body.style.backgroundImage = "-webkit-linear-gradient("+ clr +" , "+ clr2 +")";


    setTimeout(clockf, 1000);

}
clockf();
// document.getElementById("txtClock1").value = h;
// document.getElementById("txtClock2").value = m;
// document.getElementById("txtClock3").value = s;