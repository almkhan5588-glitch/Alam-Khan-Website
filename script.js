function toggleMenu(){document.getElementById("nav").classList.toggle("open")}
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("nav").classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
const progress=document.getElementById("progress");
window.addEventListener("scroll",()=>{const h=document.documentElement;progress.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%"});
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")})},{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));
const counters=document.querySelectorAll(".counter");
const countObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target,target=Number(el.dataset.target);let n=0;const timer=setInterval(()=>{n++;el.textContent=n;if(n>=target)clearInterval(timer)},90);countObserver.unobserve(el)})},{threshold:.7});
counters.forEach(e=>countObserver.observe(e));
