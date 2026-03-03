(function(){
  var t=localStorage.getItem('sada-theme');
  if(t&&t!=='default')document.documentElement.dataset.theme=t;
  window.sdTheme=function(v){
    if(!v||v==='default'){delete document.documentElement.dataset.theme;localStorage.removeItem('sada-theme')}
    else{document.documentElement.dataset.theme=v;localStorage.setItem('sada-theme',v)}
  };
})();
