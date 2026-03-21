import{a as u,S as v,i as n}from"./assets/vendor-BkC4bTqC.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();u.defaults.baseURL="https://pixabay.com";async function d(r,s){return(await u.get("/api/",{params:{key:"55023581-b8ae6332fd3af068fbd1cd850",q:r,page:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15}})).data}const m=document.querySelector(".js-gallery"),p=document.querySelector(".loader"),w=new v(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function g(r){const s=r.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:i,comments:b,downloads:L})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img class="gallery-image"
      src="${a}"
      alt="${e}"
    />
  </a>

  <div class="info">
    <p class="info-item"><b>Likes</b> ${t}</p>
    <p class="info-item"><b>Views</b> ${i}</p>
    <p class="info-item"><b>Comments</b> ${b}</p>
    <p class="info-item"><b>Downloads</b> ${L}</p>
  </div>
</li>`).join("");m.insertAdjacentHTML("beforeend",s),w.refresh()}function q(){m.innerHTML=""}function y(){p.classList.add("is-visible")}function h(){p.classList.remove("is-visible")}function M(){loadMoreBtn.classList.add("is-visible")}function S(){loadMoreBtn.classList.remove("is-visible")}const f=document.querySelector(".js-form"),$=document.querySelector(".js-load-more");let c=1,l="";f.addEventListener("submit",async r=>{r.preventDefault();const a=new FormData(r.currentTarget).get("search-text").trim();if(!a){n.error({message:"Please enter a search query!",position:"topRight",icon:!1});return}l=a,c=1,q(),y();try{const o=await d(l,c);o.hits.length>0?(g(o.hits),M()):n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#98a8d4ff",icon:!1})}catch(o){console.log(o),n.error({message:"Error fetching images. Please try again later.",position:"topRight",icon:!1})}finally{h()}f.reset()});$.addEventListener("click",async()=>{c+=1,y();try{const r=await d(l,c);g(r.hits),r.hits.length===0&&(S(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{n.error({message:"Error fetching more images.",position:"topRight"})}finally{h()}});
//# sourceMappingURL=index.js.map
