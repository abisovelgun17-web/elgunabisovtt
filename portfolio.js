(function(){
  var links=document.querySelectorAll('.primary-nav a,.tabs a');
  var up=document.getElementById('up');

  function updateActiveLink(){
    var currentFile=window.location.pathname.split('/').pop()||'portfolio.html';
    var isContact=currentFile==='portfolio.html'&&window.location.hash==='#contact';

    links.forEach(function(link){
      var target=new URL(link.href,window.location.href);
      var active=isContact
        ?target.pathname.endsWith('/portfolio.html')&&target.hash==='#contact'
        :target.pathname.endsWith('/'+currentFile)&&target.hash!=='#contact';
      link.classList.toggle('on',active);
    });
  }

  if(up){
    window.addEventListener('scroll',function(){
      up.classList.toggle('show',window.scrollY>500);
    },{passive:true});
    up.addEventListener('click',function(){
      window.scrollTo({top:0,behavior:'smooth'});
    });
  }

  window.addEventListener('hashchange',updateActiveLink);
  updateActiveLink();
})();