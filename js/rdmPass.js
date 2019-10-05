var key = "0123456789*&$";
var tmp=''

    function genPass(plength){
        tmp=''
        for(i=0;i<plength;i++){
            tmp+=key.charAt(Math.floor(Math.random()*key.length))
        }
        return tmp
    }

    function pform(passlength){
        document.frm.rdmPassTxt.value = genPass(passlength)
}
    

    