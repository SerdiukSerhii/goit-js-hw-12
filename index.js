import{a as m,S as q,i as a}from"./assets/vendor-BkC4bTqC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();m.defaults.baseURL="https://pixabay.com";const P="55023581-b8ae6332fd3af068fbd1cd850";async function g(o,r){return(await m.get("/api/",{params:{key:P,q:o,page:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15}})).data}const p=document.querySelector(".js-gallery"),h=document.querySelector(".js-load-more"),y=document.querySelector(".loader"),M=new q(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:l,comments:w,downloads:E})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img class="gallery-image"
      src="${s}"
      alt="${e}"
    />
  </a>

  <div class="info">
    <p class="info-item"><b>Likes</b> ${t}</p>
    <p class="info-item"><b>Views</b> ${l}</p>
    <p class="info-item"><b>Comments</b> ${w}</p>
    <p class="info-item"><b>Downloads</b> ${E}</p>
  </div>
</li>`).join("");p.insertAdjacentHTML("beforeend",r),M.refresh()}function S(){p.innerHTML=""}function L(){y.classList.add("is-visible")}function v(){y.classList.remove("is-visible")}function R(){h.classList.add("is-visible")}function c(){h.classList.remove("is-visible")}const u={formElem:document.querySelector(".js-form"),loadMoreBtn:document.querySelector(".js-load-more")},B=15;let n=1,f="",d=0;//! ============= event ==========================
u.formElem.addEventListener("submit",async o=>{o.preventDefault();const s=new FormData(o.currentTarget).get("search-text").trim();if(!s){a.error({message:"Please enter a search query!",position:"topRight",icon:!1});return}f=s,n=1,S(),c(),L();try{const i=await g(f,n);if(d=Math.ceil(i.totalHits/B),!i.hits.length){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#98a8d4ff",icon:!1});return}if(b(i.hits),n>=d){c(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}R()}catch{a.error({message:"Error fetching images. Please try again later.",position:"topRight",icon:!1})}finally{v()}u.formElem.reset()});u.loadMoreBtn.addEventListener("click",async()=>{n+=1,L();try{const o=await g(f,n);if(b(o.hits),!o.hits.length||n>=d){c(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}const r=document.querySelector(".gallery-item:last-child");if(r){const s=r.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}}catch{a.error({message:"Error fetching more images.",position:"topRight"})}finally{v()}});
//# sourceMappingURL=index.js.map
