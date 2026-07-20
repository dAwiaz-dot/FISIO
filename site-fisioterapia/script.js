"use strict";

const CONFIG = {
  whatsappNumber: "5535998165700",
  displayPhone: "+55 35 99816-5700",
  clinicName: "FisioVita"
};
const wa=(message="Olá! Encontrei o site e gostaria de saber mais sobre os atendimentos de fisioterapia.")=>`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
document.querySelectorAll(".wa").forEach(a=>{a.href=wa();a.target="_blank";a.rel="noreferrer"});
const header=document.querySelector("#header"),menu=document.querySelector(".menu-button");
menu.addEventListener("click",()=>{const open=header.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.textContent=open?"×":"☰";document.body.style.overflow=open?"hidden":""});
document.querySelectorAll(".mobile-nav a").forEach(a=>a.addEventListener("click",()=>{header.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.textContent="☰";document.body.style.overflow=""}));
addEventListener("keydown",e=>{if(e.key==="Escape"){header.classList.remove("open");document.body.style.overflow=""}});
addEventListener("scroll",()=>header.classList.toggle("scrolled",scrollY>16),{passive:true});

const treatments=[
["◒","Fisioterapia ortopédica","Para dores, lesões, limitações de movimento e recuperação musculoesquelética."],
["♡","Reabilitação pós-operatória","Acompanhamento para uma recuperação segura após procedimentos cirúrgicos."],
["⌁","Dores na coluna","Cuidado para desconfortos nas regiões cervical, torácica e lombar."],
["↗","Lesões esportivas","Tratamento voltado ao retorno seguro aos treinos e atividades físicas."],
["♧","Fisioterapia para idosos","Mobilidade, equilíbrio, força, independência e prevenção de quedas."],
["◇","Prevenção de lesões","Avaliação de movimentos, orientações e fortalecimento preventivo."],
["◎","Reabilitação funcional","Estratégias para recuperar movimentos importantes do cotidiano."],
["✦","Terapia manual","Técnicas manuais integradas ao plano fisioterapêutico."]
];
document.querySelector("#treatment-grid").innerHTML=treatments.map(([i,t,d])=>`<article class="treatment-card"><span class="icon">${i}</span><h3>${t}</h3><p>${d}</p><a target="_blank" rel="noreferrer" href="${wa(`Olá! Vi no site o tratamento de ${t.toLowerCase()} e gostaria de mais informações.`)}">Quero saber mais →</a></article>`).join("");

const diffs=["Atendimento pensado para cada paciente","Exercícios explicados com clareza","Evolução acompanhada durante o tratamento","Ambiente confortável e acolhedor","Orientações para o dia a dia","Foco em resultados funcionais"];
document.querySelector("#differentials").innerHTML=diffs.map((x,i)=>`<article class="slide"><b>0${i+1}</b><h3>${x}</h3><p>Uma experiência construída para que você compreenda o processo e participe da sua evolução.</p></article>`).join("");
document.querySelectorAll("[data-carousel]").forEach(c=>{let index=0;const track=c.querySelector(".carousel-track"),slides=[...track.children],dots=c.querySelector(".dots");function visible(){return innerWidth<640?1:innerWidth<980?2:3}function update(){const width=slides[0].getBoundingClientRect().width+16;index=Math.max(0,Math.min(index,slides.length-visible()));track.style.transform=`translateX(-${index*width}px)`;dots.textContent=`${index+1} / ${Math.max(1,slides.length-visible()+1)}`}const [prev,next]=c.querySelectorAll(".carousel-controls button");prev.onclick=()=>{index--;update()};next.onclick=()=>{index++;update()};addEventListener("resize",update);update();let start=0;track.addEventListener("touchstart",e=>start=e.touches[0].clientX,{passive:true});track.addEventListener("touchend",e=>{const delta=e.changedTouches[0].clientX-start;if(Math.abs(delta)>40){index+=delta<0?1:-1;update()}},{passive:true})});

const pains=["Dor nas costas","Dor no pescoço","Dor no joelho","Dor no ombro","Recuperação após cirurgia","Lesão durante atividade física","Dificuldade de mobilidade","Prevenção de novas lesões"];
const painButtons=document.querySelector("#pain-buttons"),painTitle=document.querySelector("#pain-title"),painLink=document.querySelector("#pain-link");
painButtons.innerHTML=pains.map((p,i)=>`<button class="${i?"":"active"}">${p}</button>`).join("");
function setPain(p,button){painTitle.textContent=p;painLink.href=wa(`Olá! Encontrei o site e gostaria de saber como a fisioterapia pode ajudar com: ${p}.`);painButtons.querySelectorAll("button").forEach(b=>b.classList.toggle("active",b===button))}
painButtons.querySelectorAll("button").forEach(b=>b.onclick=()=>setPain(b.textContent,b));setPain(pains[0],painButtons.firstElementChild);

const faqs=[
["Quando devo procurar um fisioterapeuta?","Quando dor, limitação de movimento ou perda de função interferirem na rotina. Uma avaliação ajuda a entender suas necessidades."],
["Preciso de encaminhamento médico?","Em muitos casos, não. Algumas condições, convênios ou pós-operatórios podem exigir encaminhamento."],
["Quanto tempo dura uma sessão?","A duração varia conforme a avaliação e o plano terapêutico."],
["Quantas sessões serão necessárias?","Depende do quadro, dos objetivos e da resposta ao tratamento."],
["O tratamento pode causar desconforto?","Algumas técnicas e exercícios podem gerar esforço leve. O atendimento é ajustado quando necessário."],
["Como devo me preparar para a avaliação?","Use roupas confortáveis e leve exames e relatórios, se tiver."],
["Vocês atendem dores na coluna?","Sim. O cuidado inclui avaliação funcional e plano individualizado."],
["Como faço para agendar?","Clique em um botão de WhatsApp e combine o melhor horário."]
];
const faq=document.querySelector("#faq");faq.innerHTML=faqs.map(([q,a],i)=>`<article class="faq-item ${i?"":"open"}"><button aria-expanded="${i?"false":"true"}>${q}<span>⌄</span></button><p>${a}</p></article>`).join("");
faq.querySelectorAll("button").forEach(btn=>btn.onclick=()=>{const item=btn.parentElement,was=item.classList.contains("open");faq.querySelectorAll(".faq-item").forEach(x=>{x.classList.remove("open");x.querySelector("button").setAttribute("aria-expanded","false")});if(!was){item.classList.add("open");btn.setAttribute("aria-expanded","true")}});

document.querySelector("#contact-form").addEventListener("submit",e=>{e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;const d=new FormData(form);open(wa(`Olá! Meu nome é ${d.get("nome")}. Gostaria de informações sobre ${d.get("motivo")}. Prefiro atendimento no período ${d.get("periodo")}. Mensagem: ${d.get("mensagem")||"Sem mensagem adicional"}. Telefone: ${d.get("telefone")}.`),"_blank","noopener,noreferrer")});
document.querySelector("#year").textContent=new Date().getFullYear();
const privacy=document.querySelector("#privacy");document.querySelector("#privacy-open").onclick=()=>privacy.showModal();document.querySelector("#privacy-close").onclick=()=>privacy.close();

// Progressive enhancements that keep the file:// version fully functional.
document.querySelectorAll("[data-phone]").forEach((element) => {
  element.textContent = CONFIG.displayPhone;
});

const phoneInput = document.querySelector('input[name="telefone"]');
if (phoneInput) {
  phoneInput.addEventListener("input", () => {
    const digits = phoneInput.value.replace(/\D/g, "").slice(0, 11);
    phoneInput.value = digits
      .replace(/^(\d{0,2})(\d{0,5})(\d{0,4}).*/, (_, ddd, first, last) =>
        [ddd && `(${ddd}`, ddd.length === 2 ? ") " : "", first, last && `-${last}`].join("")
      );
  });
}

document.querySelectorAll("main section").forEach((section) => section.classList.add("reveal"));
if (!matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach((section) => revealObserver.observe(section));
} else {
  document.querySelectorAll(".reveal").forEach((section) => section.classList.add("visible"));
}

document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("error", () => {
    image.style.display = "none";
    image.parentElement?.classList.add("image-fallback");
    image.parentElement?.setAttribute("aria-label", image.alt || "Imagem temporariamente indisponível");
  }, { once: true });
});

if (privacy) {
  privacy.addEventListener("click", (event) => {
    const rect = privacy.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) privacy.close();
  });
}
