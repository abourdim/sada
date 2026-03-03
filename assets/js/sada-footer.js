(function(){
var parts=location.pathname.split('/');
var depth=0;
for(var i=parts.length-2;i>=0;i--){if(parts[i])depth++;else break}
var root='';
for(var i=0;i<depth;i++)root+='../';
var d=document.createElement('div');
d.innerHTML='<div style="position:fixed;bottom:0;left:0;right:0;z-index:10000;text-align:center;padding:6px 12px;background:rgba(6,6,14,.9);border-top:1px solid rgba(255,255,255,.04)"><div style="display:flex;align-items:center;justify-content:center;gap:8px"><img style="width:20px;height:20px;opacity:.4" src="'+root+'assets/img/wdiy-logo.png" alt="wdiy"><a href="https://workshop-diy.org" style="color:rgba(255,255,255,.2);text-decoration:none;font-size:10px;letter-spacing:1px">workshop-diy.org</a><span style="color:rgba(255,255,255,.08)">&middot;</span><span style="font-family:\'Amiri\',serif;font-size:14px;background:linear-gradient(135deg,#14b8a6,#6366f1);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">\u0635\u062f\u0649</span><span style="font-family:\'Nunito\',sans-serif;font-size:9px;color:rgba(255,255,255,.15);letter-spacing:3px">sada</span></div></div>';
document.body.appendChild(d.firstChild);
})();
