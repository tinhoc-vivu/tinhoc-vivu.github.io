// Get the modal
var modal = document.getElementById("myModal");
var idNews = "";

// Get the button that opens the modal
//    var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }


function modalInfoRender(numberInfo){
  var indexInfo = numberInfo - 1;
  var numberImagesInfo = data[indexInfo]['numberimages'];
  var htmlModalInfoContent = "";
  var linkYoutube = data[indexInfo]['linkyoutube'];
  idNews = data[indexInfo]['code'];
  if(data[indexInfo]['type'] == "Link-To-Do"){
    if(data[indexInfo]['linktodo'] != ""){
      window.open(data[indexInfo]['linktodo'],'_blank');
    }
  }
  else{
    if(data[indexInfo]['type'] == "Header"){
      if(data[indexInfo]['linkyoutube'] != ""){
        htmlModalInfoContent = htmlModalInfoContent + "<div class=\"mySlides\">"
                                                    + "<iframe width=\"100%\" height=\"100%\" src=\""
                                                    + linkYoutube
                                                    + "\" title=\"Video Youtube - TinHocViVu\""
                                                    + "frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>"
                                                    + "</iframe>"
                                                    + "</div>";
      }
      else{
        htmlModalInfoContent = htmlModalInfoContent + "<div class=\"mySlides\">"
                                                  + "<img src=\""
                                                  + data[indexInfo]['image1']
                                                  + "\">"                                                  
                                                  + "</div>";
      }
      htmlModalInfoContent = htmlModalInfoContent + "<div class=\"modal-content-header\">"

                                                  + "<h2>" + data[indexInfo]['title'] + "</h2>"
                                                  + "<p class=\"info-item-header\">"
                                                                                                    
                                                  + "<span style=\"color: #4864ed;\">"
                                                  + "<i class=\"fa-solid fa-book\"></i>&nbsp;"
                                                  + "</span>"

                                                  + data[indexInfo]['subject']

                                                  + "&nbsp;&nbsp;<span style=\"color: #d7b107;\">"
                                                  + "<i class=\"fa-solid fa-medal\"></i>&nbsp;"
                                                  + "</span>"
                                                  + data[indexInfo]['code']
                                                  + "&nbsp; &nbsp; &nbsp;"

                                                  + "<button style=\"border:none;\" onclick=\"shareNews()\">"
                                                  + "<span style=\"color: #1877F2; font-weight: bold;\">"
                                                  + "<i class=\"fa-solid fa-square-share-nodes\"></i>&nbsp;"                                                  
                                                  + "Chia Sẻ"
                                                  + "</span>"
                                                  + "</button>"

                                                  + "</p>"


                                                  + "<div class=\"modal-content-info\">"
                                                  + "<p class=\"content-description-detail\">"
                                                  + data[indexInfo]['postcontent']
                                                  + "</p>"                                                  
                                                  + "</div>"

                                                  + "</div>";
    }
    else{
      //When No-Header
      htmlModalInfoContent = htmlModalInfoContent + "<div class=\"modal-content-header\" style=\"padding-top: ; text-align : center !important;\">"

                                                  + "<h2>" + data[indexInfo]['title'] + "</h2>"
                                                  + "<p class=\"info-item-header\">"
                                                                                                    
                                                  + "<span style=\"color: #4864ed;\">"
                                                  + "<i class=\"fa-solid fa-book\"></i>&nbsp;"
                                                  + "</span>"

                                                  + data[indexInfo]['subject']

                                                  + "&nbsp;&nbsp;<span style=\"color: #d7b107;\">"
                                                  + "<i class=\"fa-solid fa-medal\"></i>&nbsp;"
                                                  + "</span>"
                                                  + data[indexInfo]['code']
                                                  + "&nbsp; &nbsp; &nbsp;"
                                                  
                                                  + "<button style=\"border:none;\" onclick=\"shareNews()\">"
                                                  + "<span style=\"color: #1877F2; font-weight: bold;\">"
                                                  + "<i class=\"fa-solid fa-square-share-nodes\"></i>&nbsp;"                                                  
                                                  + "Chia Sẻ"
                                                  + "</span>"
                                                  + "</button>"

                                                  + "</p>"                                                  
                                                  + data[indexInfo]['postcontent']                                                  
                                                  + "</div>";
      }     
    
      document.getElementById("myModalContent").innerHTML = htmlModalInfoContent;
      modal.style.display = "block";
      showSlides(slideIndex = 1);
      document.getElementById("navbarBDS").style.display = "none";
  }
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.getElementById("navbarBDS").style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

//Get link share News
function shareNews(){
  
  var copyLinkShare = "https://tinhoc-vivu.github.io/index.html?id=" + idNews;
        
  // Copy link to clipboard
  navigator.clipboard.writeText(copyLinkShare);
  
  // Alert the copied text
  alert("Bạn hãy nhấn OK để sao chép link của bài viết!");
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
  //captionText.innerHTML = dots[slideIndex-1].alt;
}