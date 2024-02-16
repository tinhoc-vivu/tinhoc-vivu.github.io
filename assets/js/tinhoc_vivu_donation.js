const sheetID4 = '1d7Y3yIwXm2cs-jxtlLh57NCWDOi6nhgRsXsPYXH8XTo';
const base4 = `https://docs.google.com/spreadsheets/d/${sheetID4}/gviz/tq?`;

let sheetName4 = 'Donation';
const qu_AllData4 = 'Select *';
const queryAllData4 = encodeURIComponent(qu_AllData4);
let urlAllData4 = `${base4}&sheet=${sheetName4}&tq=${queryAllData4}`;

let data = [];
let dataAll = [];
let dataHotNews = [];
let dataSearch = [];

let checkStatusSearch = false;
let htmlContactInfo = "";
let htmlMainContactInfoCongVu = "";


window.onload = init4;

function init4() {
    fetch(urlAllData4)
        .then(res => res.text())
        .then(rep => {
            
            const jsData = JSON.parse(rep.substr(47).slice(0, -2));
            const colz = [];
            jsData.table.cols.forEach((heading) => {                
                if (heading.label) {
                    colz.push(heading.label.toLowerCase().replace(/\s/g, ''));
                }
            })
            
            jsData.table.rows.forEach((main) => {
                
                const row = {};
                colz.forEach((ele, ind) => {
                    
                    row[ele] = (main.c[ind] != null) ? main.c[ind].v : '';
                })                
                dataAll.push(row);                
                
            })
            data = dataAll;
            renderContactInfo(data);
        });
}

function renderContactInfo(data){    
    htmlMainContactInfoCongVu = ""
    htmlMainContactInfoCongVu = htmlMainContactInfoCongVu
                    + "<div class=\"row contact-CongVu\">"
                    + "<div class=\"col-md-4 col-sm-4 col-12\">"
                    + "<img class=\"img-contact-CongVu\" src=\""
                    + data[0]['linkavatar']
                    + "\">"
                    + "</div>"
                    + "<div class=\"col-md-8 col-sm-8 col-12 introduce-CongVu\">"
                    + "<h2>"
                    + data[0]['title']
                    + "</h2>"
                    +"<p>"
                    + data[0]['description']
                    + "</p>"
                    + "</div>"
                    + "</div>"
                    + "<div class=\"row social-CongVu\">"
                    
                    + "<div class=\"col-md-4 col-sm-4 col-4\">"
                    + "<img class=\"img-social-CongVu\" src=\""
                    + data[0]['imageyoutube']
                    + "\">"
                    + "</div>"
                    
                    + "<div class=\"col-md-4 col-sm-4 col-4\">"
                    + "<img class=\"img-social-CongVu\" src=\""
                    + data[0]['imagetiktok']
                    + "\">"
                    + "</div>"

                    
                    + "<div class=\"col-md-4 col-sm-4 col-4\">"
                    + "<img class=\"img-social-CongVu\" src=\""
                    + data[0]['imagefacebook']
                    + "\">"
                    + "</div>"
                    
                    + "</div>";

    document.getElementById("main").innerHTML = htmlMainContactInfoCongVu;
}
