$(window).on("load",function(){$('[data-loader="circle-side"]').fadeOut(),$("#preloader").delay(333).fadeOut("slow"),$("body").delay(333)});const scrollTopBtn=document.getElementById("scrollTop");window.addEventListener("scroll",()=>{200<=this.scrollY?scrollTopBtn.classList.add("show"):scrollTopBtn.classList.remove("show")}),scrollTopBtn.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const listItems=document.querySelectorAll("header .navbar .list-item .item"),reterviewdropdown=document.querySelector(".RetrieveMyBooking-suppage "),currencydropdown=listItems[3].querySelector(".dropdown-menu"),reterviewCloseBtn=reterviewdropdown.querySelector(".con-btn .close-btn"),signSection=document.getElementById("sign-in"),closeBtnSignSection=signSection.querySelector(".toggle-menu .header i"),mopile_list_nav_item=document.querySelectorAll("header .mopile-list .nav-list .nav-item"),humburger_btn=document.querySelector("header .navbar .humburger-btn");function changeActiveMobile(e){mopile_list_nav_item.forEach(e=>{e.classList.remove("active")}),e.classList.add("active"),mopile_list_nav_item[2].classList.contains("active")?(reterviewdropdown.classList.add("active"),document.body.classList.add("no-scroll")):reterviewdropdown.classList.remove("active"),mopile_list_nav_item[4].classList.contains("active")?(signSection.classList.add("active"),document.body.classList.add("no-scroll")):signSection.classList.remove("active")}function changeActive(e){listItems.forEach(e=>{e.classList.remove("active")}),e.classList.add("active"),listItems[2].classList.contains("active")?(reterviewdropdown.classList.add("active"),document.body.classList.add("no-scroll")):reterviewdropdown.classList.remove("active"),listItems[4].classList.contains("active")?(signSection.classList.add("active"),document.body.classList.add("no-scroll")):signSection.classList.remove("active")}$(function(){$(humburger_btn).on("click",()=>{$("header .mopile-list").slideToggle()})}),mopile_list_nav_item.forEach(e=>{e.addEventListener("click",()=>{changeActiveMobile(e)})}),listItems.forEach(e=>{e.addEventListener("click",()=>{changeActive(e)})}),reterviewCloseBtn.addEventListener("click",()=>{reterviewdropdown.classList.remove("active"),listItems[2].classList.remove("active"),mopile_list_nav_item[2].classList.remove("active"),document.body.classList.remove("no-scroll")}),closeBtnSignSection.addEventListener("click",()=>{signSection.classList.remove("active"),listItems[4].classList.remove("active"),document.body.classList.remove("no-scroll")});const FromOptionsSignInSec=signSection.querySelectorAll(".toggle-menu .box .options li"),formEmail=signSection.querySelector(".toggle-menu .box form .email-addres"),FormMobile=signSection.querySelector(".toggle-menu .box form .mobile-number");function changeActiveForForm(e){FromOptionsSignInSec.forEach(e=>{e.classList.remove("active")}),e.classList.add("active"),FromOptionsSignInSec[0].classList.contains("active")?formEmail.classList.add("active"):formEmail.classList.remove("active"),FromOptionsSignInSec[1].classList.contains("active")?FormMobile.classList.add("active"):FormMobile.classList.remove("active")}FromOptionsSignInSec.forEach(e=>{e.addEventListener("click",()=>{changeActiveForForm(e)})});var Headerinput=document.querySelector("#phone");window.intlTelInput(Headerinput,{utilsScript:"./js/utils.js"});let FINAL_STEP_NAV_BTN=document.querySelectorAll(".final-step-page .content .form-feild .form-content .content  .nav-menu .nav-item"),INSTURCTION_FEILD=document.querySelector(".final-step-page .content .form-feild .form-content .content .instruction"),PAY_INSTALLMENT_FEILD=document.querySelector(".final-step-page .content .form-feild .form-content .content .card-body .container .pay-installment");function FINAL_STEP_NAV_BTN_ACTIVE_POINT(e){FINAL_STEP_NAV_BTN.forEach(e=>{e.classList.remove("active")}),e.classList.add("active")}FINAL_STEP_NAV_BTN.forEach(e=>{e.addEventListener("click",()=>{FINAL_STEP_NAV_BTN_ACTIVE_POINT(e),FINAL_STEP_NAV_BTN[1].classList.contains("active")?(INSTURCTION_FEILD.classList.add("active"),PAY_INSTALLMENT_FEILD.classList.add("active")):(INSTURCTION_FEILD.classList.remove("active"),PAY_INSTALLMENT_FEILD.classList.remove("active"))})}),FINAL_STEP_NAV_BTN[1].addEventListener("click",()=>{});let GET_VOUCHER_CODE_BTN=document.querySelector(".final-step-page .content .form-feild .form-content .content .card-body .form .get-voucher-code #get-voucher-code"),GET_VOUCHER_CODE_TOGGLE_MENU=document.querySelector(".final-step-page .content .form-feild .form-content .content .card-body .form .get-voucher-code .toggle-menu");GET_VOUCHER_CODE_BTN.addEventListener("click",()=>{GET_VOUCHER_CODE_BTN.checked?GET_VOUCHER_CODE_TOGGLE_MENU.classList.add("active"):GET_VOUCHER_CODE_TOGGLE_MENU.classList.remove("active")});const flight_summary_btn=document.querySelector(".final-step-page .content .form-feild .side-bar .side-bar-container .flight-summary .title .flight-details");let FLIGHT_SUMMARY_SUBMENU=document.querySelector(".final-step-page .content .form-feild .side-bar .side-bar-container .flight-summary .title .flight-details-menu .con-btn .close-btn button");flight_summary_btn.addEventListener("click",e=>{flight_summary_btn.parentElement.classList.add("active"),document.body.classList.add("no-scroll")}),FLIGHT_SUMMARY_SUBMENU.addEventListener("click",()=>{flight_summary_btn.parentElement.classList.remove("active"),document.body.classList.remove("no-scroll")});const flight_fare_details_btn=document.querySelector(".final-step-page .content .form-feild .side-bar .side-bar-container .fare-deatails .title .fare-deatails_btn");let FLIGHT_FARE_DETAILS_SUBMENU=document.querySelector(".final-step-page .content .form-feild .side-bar .side-bar-container .fare-deatails .title .cancel-change-menu .con-btn .close-btn button");flight_fare_details_btn.addEventListener("click",e=>{flight_fare_details_btn.parentElement.classList.add("active"),document.body.classList.add("no-scroll")}),FLIGHT_FARE_DETAILS_SUBMENU.addEventListener("click",()=>{flight_fare_details_btn.parentElement.classList.remove("active"),document.body.classList.remove("no-scroll")});let FLIGHT_FARE_DETAILS_FAQ_CANCELATION=document.querySelector(".final-step-page .content .form-feild .side-bar .side-bar-container .fare-deatails .title .cancel-change-menu .con-btn .supmenu .FAQ-cancelation .header"),FLIGHT_FARE_DETAILS_FAQ_CANCELATION_TOGGLEMENUE=document.querySelector(".final-step-page .content .form-feild .side-bar .side-bar-container .fare-deatails .title .cancel-change-menu .con-btn .supmenu .FAQ-cancelation .toggle-menu");FLIGHT_FARE_DETAILS_FAQ_CANCELATION.addEventListener("click",()=>{FLIGHT_FARE_DETAILS_FAQ_CANCELATION.classList.toggle("active"),FLIGHT_FARE_DETAILS_FAQ_CANCELATION.classList.contains("active")?FLIGHT_FARE_DETAILS_FAQ_CANCELATION_TOGGLEMENUE.classList.add("active"):FLIGHT_FARE_DETAILS_FAQ_CANCELATION_TOGGLEMENUE.classList.remove("active")});let FLIGHT_FARE_DETAILS_FAQ=document.querySelector(".final-step-page .content .form-feild .side-bar .side-bar-container .fare-deatails .title .cancel-change-menu .con-btn .supmenu .FAQ  .header"),FLIGHT_FARE_DETAILS_FAQ_TOGGLEMENUE=document.querySelector(".final-step-page .content .form-feild .side-bar .side-bar-container .fare-deatails .title .cancel-change-menu .con-btn .supmenu .FAQ  .toggle-menu");FLIGHT_FARE_DETAILS_FAQ.addEventListener("click",()=>{FLIGHT_FARE_DETAILS_FAQ.classList.toggle("active"),FLIGHT_FARE_DETAILS_FAQ.classList.contains("active")?FLIGHT_FARE_DETAILS_FAQ_TOGGLEMENUE.classList.add("active"):FLIGHT_FARE_DETAILS_FAQ_TOGGLEMENUE.classList.remove("active")});const side_bar_traveller_btn=document.querySelector(".final-step-page .content .form-feild .side-bar .side-bar-container .fare-deatails .content .list .traveller-section .toggle-btn"),side_bar_continue_btn=document.querySelector(".final-step-page .content .form-feild .side-bar .side-bar-container .fare-deatails .content .continue-to-final-details");function remove_continue_btn(){side_bar_continue_btn.remove()}remove_continue_btn(),side_bar_traveller_btn.addEventListener("click",()=>{side_bar_traveller_btn.classList.toggle("active")});