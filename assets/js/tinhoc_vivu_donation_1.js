// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function modalInfoRender(){
    var htmlModalInfoContent = "";     
    
    htmlModalInfoContent = htmlModalInfoContent + "<div class=\"modal-content-header\">"
                                                + "<h2>" + data[0]["titleexperiences"] + "</h2>"
                                                + "<div class=\"modal-content-info\">"
                                                + "<p class=\"content-description-detail\">"
                                                + data[0]["experiences"]
                                                + "</p>"                    
                                                + "</div>"
                                                + "</div>";
    
    document.getElementById("myModalContent").innerHTML = htmlModalInfoContent;
    modal.style.display = "block";
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