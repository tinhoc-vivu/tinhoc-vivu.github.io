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
    var statusRegister = "";
    var statusLearnCourse = "";
    var linkYoutube = data[indexInfo]['linkyoutube'];
    idNews = data[indexInfo]['code'];

    if(data[indexInfo]['indexfee'] == 1){
    statusRegister = "none";
    }
    else{
    statusRegister = "inline";
    }

    if(data[indexInfo]['indexfee'] == 2){
    statusLearnCourse = "none";
    }
    else{
    statusLearnCourse = "inline";
    }

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

                                                + "&nbsp;&nbsp;&nbsp;<span style=\"color: #d7b107;\">"
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

                                                + "&nbsp; &nbsp; &nbsp;"
                                                + "<button style=\"border:none; display:"
                                                + statusRegister
                                                + ";\" onclick=\"enrollCourse("
                                                + String(indexInfo)
                                                + ")\">"
                                                + "<span style=\"color: #03730a; font-weight: bold;\">"
                                                + "<i class=\"fa-solid fa-square-pen\"></i>&nbsp;"
                                                + "Ghi Danh"
                                                + "</span>"
                                                + "</button>"
                                                
                                                
                                                + "<button style=\"border:none; display:"
                                                + statusLearnCourse
                                                + ";\" onclick=\"learnCourse("
                                                + indexInfo
                                                + ")\">"
                                                + "<span style=\"color: #FF8D1A; font-weight: bold;\">"
                                                + "<i class=\"fa-solid fa-circle-arrow-up\"></i>&nbsp;"
                                                + "Vào Học"
                                                + "</span>"
                                                + "</button>"

                                                + "</p>"
                                                

                                                + "<div class=\"modal-content-info\">"
                                                + "<h4 class=\"title-description-detail\">"
                                                + "Giới Thiệu Khóa Học"
                                                + "</h4>"
                                                
                                                + data[indexInfo]['introofcourse']
                                                
                                                + "<h4 class=\"title-description-detail\">"
                                                + "Yêu Cầu Trước Khi Bắt Đầu Khóa Học"
                                                + "</h4>"
                                                + data[indexInfo]['requirementofcourse']
                                                
                                                + "<h4 class=\"title-description-detail\">"
                                                + "Mục Tiêu Của Khóa Học"
                                                + "</h4>"
                                                + data[indexInfo]['goalofcourse']
                                                
                                                + "</div>"

                                                + "<div class=\"modal-contact\">"
                                                + "<h2 class=\"title-description-detail\">"
                                                + "Lộ Trình Học"
                                                + "</h2>"
                                                + data[indexInfo]['routeofcourse']
                                                + "</div>"

                                                + "<div class=\"modal-contact\">"
                                                + "<h2 class=\"title-description-detail\">"
                                                + "Về Giáo Viên"
                                                + "</h2>"

                                                + "<div style=\"padding-left: 30px; display: flex;\" class=\"col-md-12 col-sm-12 col-12\">" //<div 8>
                                                + "<div class=\"col-md-3 col-sm-3 col-3\">" //<div 9>
                                                + "<img  style=\"float:right;\" class=\"img-header-lecturers\" src=\"" + data[indexInfo]['avatarlecturers'] + "\">"
                                                + "</div>" //Close <div 9>
                                                + "<div class=\"col-md-9 col-sm-9 col-9\">" //<div 10>
                                                + "<div>" //<div 11>
                                                + "<p style=\"padding-left: 1%; padding-top: 10%;\">"
                                                + "<span style=\"color: #C83B4C;\">"
                                                + data[indexInfo]['lecturers']
                                                + "</span>"
                                                + "<span style=\"color: #555555;\">"
                                                + "<br/>"
                                                + data[indexInfo]['infolecturers']
                                                + "</span>"
                                                + "</p>"
                                                + "</div>" //Close <div 11>

                                                + "</div>" //Close <div 10>
                                                + "</div>" //Close <div 8>

                                                + "<div style=\"padding-left: 0px; display: inline-block;\" class=\"col-md-12 col-sm-12 col-12\">" //<div 12>

                                                + data[indexInfo]['detaillecturers']
                                                + "</div>" //Close <div 12>
                                                + "</div>"

                                                + "</div>";
    
    
    document.getElementById("myModalContent").innerHTML = htmlModalInfoContent;
    modal.style.display = "block";
    showSlides(slideIndex = 1);
    document.getElementById("navbarBDS").style.display = "none";
}

function modalLessonRenderDetail(numberInfo){
    var indexInfo = numberInfo - 1;
    var numberImagesInfo = data[indexInfo]['numberimages'];
    var htmlModalInfoContent = "";
    var statusRegister = "";
    var statusLearnCourse = "";
    idNews = data[indexInfo]['code'];

    if(data[indexInfo]['indexfee'] == 1){
    statusRegister = "none";
    }
    else{
    statusRegister = "inline";
    }

    if(data[indexInfo]['indexfee'] == 2){
    statusLearnCourse = "none";
    }
    else{
    statusLearnCourse = "inline";
    }
    if(data[indexInfo]['linkyoutube'] != ""){
    htmlModalInfoContent = htmlModalInfoContent + "<div class=\"mySlides\">"
                                                + "<iframe width=\"100%\" height=\"100%\" src=\""
                                                + data[indexInfo]['linkyoutube']
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

                                                + "<h2>" + data[indexInfo]['lesson'] + "</h2>"
                                                
                                                + "<div class=\"modal-content-info\">"
                                                + "<h4 class=\"title-description-detail\">"
                                                + "Mục tiêu bài học"
                                                + "</h4>"
                                                
                                                + data[indexInfo]['goaloflesson']
                                                
                                                + "<h4 class=\"title-description-detail\">"
                                                + "Nội dung bài học"
                                                + "</h4>"
                                                + data[indexInfo]['lessoncontent']
                                                
                                                + "<h4 class=\"title-description-detail\">"
                                                + "Tự đánh giá"
                                                + "</h4>"
                                                + data[indexInfo]['summary']
                                                
                                                + "</div>"

                                                + "</div>"

                                                + "</div>";
    
    
    document.getElementById("myModalContent").innerHTML = htmlModalInfoContent;
    modal.style.display = "block";
    showSlides(slideIndex = 1);
    document.getElementById("navbarBDS").style.display = "none";
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
    
    var copyLinkShare = "https://tinhoc-vivu.github.io/course.html?id=" + idNews;
        
    // Copy link to clipboard
    navigator.clipboard.writeText(copyLinkShare);
    
    // Alert the copied text
    alert("Bạn hãy nhấn OK để sao chép link của khóa học!");
}

function enrollCourse(indexInfo){
    window.open(data[indexInfo]['linkformregister'], '_blank');
}

function learnCourse(indexCourse){
    checkAccount(data[indexCourse]['code'], "ok", data[indexCourse]['title'], data[indexCourse]['linkformregister']);
    // Code Check Login
    // var yourUsername = prompt("Tên đăng nhập: ", "");
    // var yourPassword = prompt("Mật khẩu: ", "");
    // checkAccount(data[indexCourse]['code'], yourUsername, yourPassword, data[indexCourse]['title']);
    
    //renderCourseByID(yourPIN);
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

