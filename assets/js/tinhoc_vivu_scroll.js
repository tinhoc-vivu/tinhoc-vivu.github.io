let prevScrollpos = window.pageYOffset;
window.onscroll = function() {      
  if(modal.style.display === "block"){
    document.getElementById("navbarBDS").style.display = "none";        
  }
  else{
    let currentScrollPos = window.pageYOffset;
  
    if (prevScrollpos < currentScrollPos && currentScrollPos > 100) {
      document.getElementById("navbarBDS").style.display = "none";
      prevScrollpos = currentScrollPos;
    } else if(prevScrollpos > currentScrollPos + 100){
      document.getElementById("navbarBDS").style.display = "block";
      prevScrollpos = currentScrollPos;
    }
    

  }
  
};