const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const menuBtn = $("#menuBtn"), nav = $("#nav"), themeBtn = $("#themeBtn");
menuBtn.addEventListener("click",()=>{nav.classList.toggle("active");const i=menuBtn.querySelector("i");i.classList.toggle("fa-bars");i.classList.toggle("fa-xmark")});
$$("#nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("active");menuBtn.querySelector("i").className="fa-solid fa-bars"}));
if(localStorage.getItem("bankTheme")==="dark"){document.body.classList.add("dark");themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>'}
themeBtn.addEventListener("click",()=>{document.body.classList.toggle("dark");const dark=document.body.classList.contains("dark");localStorage.setItem("bankTheme",dark?"dark":"light");themeBtn.innerHTML=dark?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>'});
const modal=$("#modal"), modalTitle=$("#modalTitle"), modalText=$("#modalText");
function openModal(title,text){modalTitle.textContent=title;modalText.textContent=text;modal.classList.add("active")}
function closeModal(){modal.classList.remove("active")}
$("#closeModal").addEventListener("click",closeModal);$("#modalOk").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
$("#demoBtn").addEventListener("click",()=>openModal("Academic Demo","This independent project is a front-end UI demonstration only. It is not affiliated with Meezan Bank or any financial institution. No banking credentials or payments are accepted."));
$("#accountBtn").addEventListener("click",()=>openModal("Sample Account UI","This button demonstrates a UI interaction only. No real account can be opened from this academic project."));
$$(".learnBtn").forEach(b=>b.addEventListener("click",()=>openModal(b.dataset.title,`This ${b.dataset.title} component is a visual demonstration only. It does not connect to a bank or process transactions.`)));
$("#digitalBtn").addEventListener("click",()=>openModal("Dashboard Demo","You are viewing a static dashboard concept. All displayed values are fictional placeholders."));
$("#serviceSearch").addEventListener("input",e=>{const v=e.target.value.toLowerCase().trim();$$(".service-card").forEach(c=>c.style.display=c.dataset.service.includes(v)?"":"none")});
$("#calculateBtn").addEventListener("click",()=>{const amount=Number($("#amount").value),rate=Number($("#rate").value),years=Number($("#years").value);if(amount<=0||rate<0||years<=0||!$("#amount").value||!$("#rate").value||!$("#years").value){$("#result").textContent="Enter valid values";return}$("#result").textContent="PKR "+(amount+amount*rate/100*years).toLocaleString()});
$("#branchSearch").addEventListener("input",e=>{const v=e.target.value.toLowerCase().trim();$$(".branch-card").forEach(c=>c.style.display=c.dataset.city.includes(v)?"":"none")});
$$(".faq-question").forEach(q=>q.addEventListener("click",()=>{const a=q.nextElementSibling,icon=q.querySelector("i");$$(".faq-answer").forEach(x=>{if(x!==a)x.style.maxHeight=null});$$(".faq-question i").forEach(i=>{if(i!==icon)i.className="fa-solid fa-plus"});if(a.style.maxHeight){a.style.maxHeight=null;icon.className="fa-solid fa-plus"}else{a.style.maxHeight=a.scrollHeight+"px";icon.className="fa-solid fa-minus"}}));
$("#contactForm").addEventListener("submit",e=>{e.preventDefault();$("#formMessage").textContent="Preview only: this form does not send or store your message.";$("#formMessage").style.color="var(--green)";e.target.reset()});
$("#year")?.replaceChildren(String(new Date().getFullYear()));
if(typeof gsap!=="undefined"){if(typeof ScrollTrigger!=="undefined")gsap.registerPlugin(ScrollTrigger);gsap.from(".navbar",{y:-40,opacity:0,duration:.7});gsap.from(".hero-text > *",{x:-35,opacity:0,duration:.7,stagger:.1});gsap.from(".bank-card",{x:35,opacity:0,rotation:8,duration:.8});if(typeof ScrollTrigger!=="undefined"){$$(".service-card").forEach((c,i)=>gsap.from(c,{scrollTrigger:{trigger:c,start:"top 90%"},y:25,opacity:0,duration:.5,delay:i*.04}));gsap.from(".building",{scrollTrigger:{trigger:".about",start:"top 80%"},x:-35,opacity:0,duration:.7});gsap.from(".phone",{scrollTrigger:{trigger:".digital",start:"top 80%"},x:35,opacity:0,duration:.7})}}
