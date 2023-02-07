function doencrypt(a){return null==javascript?!1:""==a.code.value?(alert("Masukkan Script yang ingin di Encrypt bos!"),!1):(enctext=encrypt(a.code.value),codetocopy='\n',codetocopy+="<!-- Encrypt by https://team-xenzi.blogspot.com/ -->\n",codetocopy+="document.write(unescape('"+enctext+"'));\n",codetocopy+="",a.ecode.value=codetocopy,a.sac.disabled=!1,!1)}function sandc(a){a.ecode.focus(),a.ecode.select(),copytext=a.ecode.createTextRange(),copytext.execCommand("Copy"),alert("Copied the Encrypted HTML Code to clipboard, you may now paste this into your website")}function encrypt(a){var c,b="";for(c=0;c<a.length;c++)b+="%"+hexfromdec(a.charCodeAt(c));return b}function hexfromdec(a){return a>65535?"err!":(first=Math.round(a/4096-.5),temp1=a-4096*first,second=Math.round(temp1/256-.5),temp2=temp1-256*second,third=Math.round(temp2/16-.5),fourth=temp2-16*third,""+getletter(third)+getletter(fourth))}function getletter(a){return a<10?a:10==a?"A":11==a?"B":12==a?"C":13==a?"D":14==a?"E":15==a?"F":void 0}document.writeln("<style>#doencrypts{border: solid 10px #3CAA4E; padding-left: 4; padding-right: 4; padding-top: 1; padding: 5px; width: 100%;}#encrypted1 {width: 80px;height: 20px;position: absolute;left: 0px;}</style>");
  var malin="#masukan-link",mades="#masukan-deskripsi",papes="#masukan-pesan",nopes="#masukan-pesan";
var pres = document.getElementsByTagName("blockquote"),javascript="";
for (var i = 0; i < pres.length; i++) {
  pres[i].addEventListener("dblclick", function () {
    var selection = getSelection();
    var range = document.createRange();
    range.selectNodeContents(this);
    selection.removeAllRanges();
    selection.addRange(range);
  }, false);
}
    function eraseText() {
     document.getElementById("husni-textarea").value = "";
	}
