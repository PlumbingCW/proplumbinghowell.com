(function(){
var root=document.documentElement;
var btn=document.querySelector('.menu-btn'),ov=document.querySelector('.mob-overlay'),cl=document.querySelector('.mob-close');
function setOpen(o){document.body.classList.toggle('nav-open',o);root.style.overflow=o?'hidden':'';if(btn)btn.setAttribute('aria-expanded',o?'true':'false');}
if(btn)btn.addEventListener('click',function(){setOpen(true)});
if(ov)ov.addEventListener('click',function(){setOpen(false)});
if(cl)cl.addEventListener('click',function(){setOpen(false)});
document.querySelectorAll('.mob-drawer a').forEach(function(a){a.addEventListener('click',function(){setOpen(false)})});
window.addEventListener('resize',function(){if(window.innerWidth>900)setOpen(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')setOpen(false)});
document.querySelectorAll('.faq-q').forEach(function(q){
 q.addEventListener('click',function(){
  var item=q.parentNode,a=item.querySelector('.faq-a'),open=item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(function(i){i.classList.remove('open');i.querySelector('.faq-a').style.maxHeight='0';i.querySelector('.faq-q').setAttribute('aria-expanded','false')});
  if(!open){item.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';q.setAttribute('aria-expanded','true')}
 });
});
})();
