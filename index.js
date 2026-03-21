import{a as u,S as q,i as n}from"./assets/vendor-BkC4bTqC.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();u.defaults.baseURL="https://pixabay.com";async function d(r,s){return(await u.get("/api/",{params:{key:"55023581-b8ae6332fd3af068fbd1cd850",q:r,page:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15}})).data}const m=document.querySelector(".js-gallery"),p=document.querySelector(".js-load-more"),g=document.querySelector(".loader"),w=new q(".js-gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function y(r){const s=r.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:i,comments:L,downloads:v})=>`
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
    <p class="info-item"><b>Comments</b> ${L}</p>
    <p class="info-item"><b>Downloads</b> ${v}</p>
  </div>
</li>`).join("");m.insertAdjacentHTML("beforeend",s),w.refresh()}function E(){m.innerHTML=""}function h(){g.classList.add("is-visible")}function b(){g.classList.remove("is-visible")}function M(){p.classList.add("is-visible")}function S(){p.classList.remove("is-visible")}const c={formElem:document.querySelector(".js-form"),loadMoreBtn:document.querySelector(".js-load-more")};let l=1,f="";c.formElem.addEventListener("submit",async r=>{r.preventDefault();const a=new FormData(r.currentTarget).get("search-text").trim();if(!a){n.error({message:"Please enter a search query!",position:"topRight",icon:!1});return}f=a,l=1,E(),h();try{const o=await d(f,l);o.hits.length>0?(y(o.hits),M()):n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#98a8d4ff",icon:!1})}catch(o){console.log(o),n.error({message:"Error fetching images. Please try again later.",position:"topRight",icon:!1})}finally{b()}c.formElem.reset()});c.loadMoreBtn.addEventListener("click",async()=>{l+=1,h();try{const r=await d(f,l);y(r.hits),r.hits.length===0&&(S(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{n.error({message:"Error fetching more images.",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
