"use strict";
const buttons=[...document.querySelectorAll("[data-language]")];
function language(lang){if(!["de","en"].includes(lang))return;document.documentElement.lang=lang;buttons.forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.language===lang)));document.title=lang==="de"?"TangoToCoding — Vernetztes Engineering":"TangoToCoding — Connected Engineering";}
buttons.forEach(b=>b.addEventListener("click",()=>language(b.dataset.language)));
function reveal(){const target=document.getElementById(location.hash.slice(1));if(target?.tagName==="DETAILS")target.open=true;}
document.querySelectorAll('a[href^="#ref-"]').forEach(a=>a.addEventListener("click",()=>{const target=document.getElementById(a.hash.slice(1));if(target)target.open=true;}));
window.addEventListener("hashchange",reveal);reveal();
