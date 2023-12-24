var siteName=document.getElementById("siteName");
var siteUrl=document.getElementById("siteUrl");
var tbody=document.getElementById("tbody");
var mainMessageError=document.getElementById("mainMessageError");
if (localStorage.getItem('myproduct')) {
    webArr= JSON.parse(localStorage.getItem('myproduct'));
    displayweb(webArr);

}
else {
    webArr = [];
}
//========================================= close message when click on it=====================================================
function closeMessageError(){
    mainMessageError.classList.add("d-none");
}
//=============================================================================================================================
//========================================= add web site in my local storage an display========================================
function addWebUrl(){
    if(validName()&&validUrl()){
        var web= {
            siteName: siteName.value ,
            siteUrl:siteUrl.value
        }
            webArr.push(web);
            localStorage.setItem('myproduct', JSON.stringify(webArr))
        
            // console.log(productarr);
            clearForm();
            displayweb(webArr);
            clearValidMessage();
        }
        else{
            mainMessageError.classList.remove("d-none")
        }
       
    }

///==============================================================================================================================
//=============================== clear form==================================================
function clearForm(){
    siteName.value=" ";
    siteUrl.value=" ";}
//============================================================================================
///=====================================display element in display websites==========================================================
function displayweb(webArr) {
    var cartoona = "";
    var index = 0;
   

    for (var i = 0; i < webArr.length; i++) {
        index += 1;
        cartoona += `
        <tr>
        <td>${index}</td>
        <td>${webArr[i].siteName}</td>
        <td><button class="btn btn-warning"><i class="fa-solid fa-eye"></i><a href="${webArr[i].siteUrl}" target="_blank">visit</a></button></td>
         <td><button  class="btn btn-danger" onclick="deleteWeb(${i})"> <i class="fa-solid fa-trash"></i>Delete</button></td>
    </tr>
        
        
        `
    }
    tbody.innerHTML = cartoona;
}
///==================================================================================================
///================================delete element from display=======================================
function deleteWeb(x) {
    
    webArr.splice(x, 1);
    localStorage.setItem('myproduct', JSON.stringify(webArr));
    displayweb(webArr);
}
///===================================================================================================

//===========================================validation name==========================================/ 
siteName.addEventListener("input", validName);
    function validName(){
        var regux = /^([A-Z]|[a-z]){3,}$/;
        var isvalid = regux.test(siteName.value)
            if (isvalid){
                validSiteName.innerHTML = `<p class="text-success ms-2"><i class="fa-solid fa-check"></i></p>`
            } else if(!isvalid){
                validSiteName.innerHTML = `<p class="ms-2">Name should be included string yet from 3 char <i class="fa-solid fa-circle-exclamation"></i></p>`;
            }
        return isvalid
    }
//==========================================validation url================================ 
siteUrl.addEventListener("input", validUrl);
function validUrl(){
    var regux = /(https?:\/\/)(www.)([a-z]{2,}\.[a-z]{2,})/ig;
    var isvalid = regux.test(siteUrl.value)
        if (isvalid){
            validUrlName.innerHTML = `<p class="text-success ms-2"><i class="fa-solid fa-check"></i></p>`
        } else if(!isvalid){
            validUrlName.innerHTML = `<p class="ms-2">Url should be like "https://www.sitename.com"<i class="fa-solid fa-circle-exclamation"></i></p>`;
        }
    return isvalid
}
///======================================================================================
///================================ clear valid Message==================================

function clearValidMessage(){
    validUrlName.innerHTML=" ";
    validSiteName.innerHTML =" ";

}
///=========================================================================================