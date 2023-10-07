(function(){
  var L=localStorage.getItem('sada-lang');
  if(!L)return;
  var parts=location.pathname.split('/');
  var f=parts[parts.length-1];
  var langDir=parts[parts.length-3]||'';
  var cat=parts[parts.length-2]||'';
  var c=(langDir==='fr'?'fr':langDir==='ar'?'ar':'en');
  if(L===c)return;
  var slug=f.replace(/^workshop-diy-/,'').replace(/-fr\.html$/,'').replace(/-ar\.html$/,'').replace(/\.html$/,'');
  var root='../../';
  var t;
  if(L==='en')t=root+'apps/'+cat+'/workshop-diy-'+slug+'.html';
  else if(L==='fr')t=root+'fr/'+cat+'/workshop-diy-'+slug+'-fr.html';
  else t=root+'ar/'+cat+'/workshop-diy-'+slug+'-ar.html';
  location.replace(t);
})();
