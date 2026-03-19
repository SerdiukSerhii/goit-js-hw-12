import{a as c,S as d,i as n}from"./assets/vendor-BkC4bTqC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();c.defaults.baseURL="https://pixabay.com";function g(o){return c.get("/api/",{params:{key:"55023581-b8ae6332fd3af068fbd1cd850",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40}}).then(r=>r.data)}const f=document.querySelector(".js-gallery"),u=document.querySelector(".loader"),y=new d(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function h(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:a,comments:m,downloads:p})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img class="gallery-image"
      src="${i}"
      alt="${e}"
    />
  </a>

  <div class="info">
    <p class="info-item"><b>Likes</b> ${t}</p>
    <p class="info-item"><b>Views</b> ${a}</p>
    <p class="info-item"><b>Comments</b> ${m}</p>
    <p class="info-item"><b>Downloads</b> ${p}</p>
  </div>
</li>`).join("");f.insertAdjacentHTML("beforeend",r),y.refresh()}function b(){f.innerHTML=""}function L(){u.classList.add("is-visible")}function v(){u.classList.remove("is-visible")}const l=document.querySelector(".js-form");l.addEventListener("submit",o=>{o.preventDefault();const i=new FormData(o.currentTarget).get("search-text").trim();if(!i){n.error({message:"Please enter a search query!",position:"topRight",icon:!1});return}b(),L(),g(i).then(s=>{s.hits.length>0?h(s.hits):n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#98a8d4ff",icon:!1})}).catch(()=>{n.error({message:"Error fetching images. Please try again later.",position:"topRight",icon:!1})}).finally(()=>{v()}),l.reset()});
//# sourceMappingURL=index.js.map
