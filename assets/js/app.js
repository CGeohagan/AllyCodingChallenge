!function e(t,n,r){function a(i,c){if(!n[i]){if(!t[i]){var s="function"==typeof require&&require;if(!c&&s)return s(i,!0);if(o)return o(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[i]={exports:{}};t[i][0].call(u.exports,function(e){var n=t[i][1][e];return a(n||e)},u,u.exports,e,t,n,r)}return n[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)a(r[i]);return a}({1:[function(e,t,n){jQuery(document).ready(function(e){e.ajax({url:"assets/code-test.json",dataType:"text",success:function(t){for(var n=e.parseJSON(t),r=document.querySelector(".rates__list"),a=0;a<n.length;a++){var o=document.createElement("li"),i=n[a].name,c=n[a].apy,s=n[a].earnings;o.innerHTML="<p>"+i+"</p><p>"+c+"</p><p>"+s+"</p>",r.appendChild(o)}}});var t=document.querySelector(".sidebar"),n=document.querySelectorAll(".sidebar__button"),r=document.querySelectorAll(".sidebar__section"),a=document.querySelector("body");t.addEventListener("click",function(e){if(e.target&&e.target.classList.contains("sidebar__button")&&(n.forEach(function(e){e.classList.toggle("active")}),r.forEach(function(e){e.classList.toggle("active")})),e.target&&e.target.classList.contains("login")){var t=document.createElement("div");t.className="login-modal";var i=document.createElement("div");i.className="login-wrapper",i.innerHTML='<h3>Sign In to Your Account</h3><div class="input-wrapper"><label>Name</label><input type="text"></div><div class="input-wrapper"><label>Password</label><input type="password"></div><button class="login">Login</button>',i.appendChild(o),t.appendChild(i),console.log(t),a.classList.add("shaded"),a.appendChild(t)}});var o=document.createElement("button");o.textContent="X",o.className="exit-button",o.addEventListener("click",function(){a.classList.remove("shaded"),e(".login-modal").remove()})})},{}]},{},[1]);
//# sourceMappingURL=maps/app.js.map
