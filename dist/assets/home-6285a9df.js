import"./modulepreload-polyfill-3cfb730f.js";const i=document.getElementById("why-text-block-1"),a=document.getElementById("why-text-block-2"),g=document.getElementById("why-text-block-3"),s=document.getElementById("indoor-health"),l=document.getElementById("outdoor-health"),r=document.getElementById("longterm-health");l.style.background="linear-gradient(0deg, rgba(0, 255, 157), rgb(0, 195, 255))";a.style.zIndex=2;s.addEventListener("click",function(){i.style.zIndex=2,s.style.background="linear-gradient(0deg, rgba(0, 255, 157), rgb(0, 195, 255))",a.style.zIndex=1,l.style.background="",g.style.zIndex=1,r.style.background="",document.getElementById("why-text-block-1").classList.add("pulse")});l.addEventListener("click",function(){a.style.zIndex=2,l.style.background="linear-gradient(0deg, rgba(0, 255, 157), rgb(0, 195, 255))",i.style.zIndex=1,s.style.background="",g.style.zIndex=1,r.style.background="",document.getElementById("why-text-block-2").classList.add("pulse")});r.addEventListener("click",function(){g.style.zIndex=2,r.style.background="linear-gradient(0deg, rgba(0, 255, 157), rgb(0, 195, 255))",i.style.zIndex=1,s.style.background="",a.style.zIndex=1,l.style.background="",document.getElementById("why-text-block-3").classList.add("pulse")});const d=document.querySelectorAll(".side-scroll-block");if(d.length>0){let b=function(){d.forEach((e,t)=>{const o=y(e),n=d[t+1],c=n?y(n):!0;(t===0&&!c||o&&(!n||!c))&&e.classList.remove("pulse-on")})},y=function(e){const t=u.getBoundingClientRect(),o=e.getBoundingClientRect(),n=t.left+t.width/2,c=o.left+o.width/2;return Math.abs(n-c)<1};d.forEach(e=>e.classList.add("pulse-on"));const u=document.getElementById("what-side-scroll");u.addEventListener("scroll",b)}
