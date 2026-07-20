import { Activity, Bone, Dumbbell, HeartPulse, PersonStanding, ShieldCheck, Sparkles, StretchHorizontal } from "lucide-react";

export const PHONE_DISPLAY = "+55 35 9816-5700";
export const PHONE_DIGITS = "553598165700";
export const DEFAULT_MESSAGE = "Olá! Encontrei o site e gostaria de saber mais sobre os atendimentos de fisioterapia.";
export const whatsappUrl = (message = DEFAULT_MESSAGE) => `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(message)}`;

export const treatments = [
  {id:"ortopedica",title:"Fisioterapia ortopédica",description:"Para dores, lesões, limitações de movimento e recuperação musculoesquelética.",icon:Bone},
  {id:"pos-operatoria",title:"Reabilitação pós-operatória",description:"Acompanhamento para uma recuperação segura após procedimentos cirúrgicos.",icon:HeartPulse},
  {id:"coluna",title:"Dores na coluna",description:"Cuidado para desconfortos nas regiões cervical, torácica e lombar.",icon:Activity},
  {id:"esportiva",title:"Lesões esportivas",description:"Tratamento voltado ao retorno seguro aos treinos e atividades físicas.",icon:Dumbbell},
  {id:"idosos",title:"Fisioterapia para idosos",description:"Mobilidade, equilíbrio, força, independência e prevenção de quedas.",icon:PersonStanding},
  {id:"prevencao",title:"Prevenção de lesões",description:"Avaliação de movimentos, orientações e fortalecimento preventivo.",icon:ShieldCheck},
  {id:"funcional",title:"Reabilitação funcional",description:"Estratégias para recuperar movimentos importantes do cotidiano.",icon:StretchHorizontal},
  {id:"manual",title:"Terapia manual",description:"Técnicas manuais integradas ao plano fisioterapêutico.",icon:Sparkles}
];

export const faqs = [
  ["Quando devo procurar um fisioterapeuta?","Quando dor, limitação de movimento ou perda de função interferirem na rotina. Uma avaliação ajuda a entender suas necessidades e os próximos passos."],
  ["Preciso de encaminhamento médico?","Em muitos casos, não. Algumas condições, convênios ou pós-operatórios podem exigir encaminhamento. Confirme no primeiro contato."],
  ["Quanto tempo dura uma sessão?","A duração varia conforme a avaliação e o plano terapêutico. Ao agendar, você recebe a orientação adequada ao seu caso."],
  ["Quantas sessões serão necessárias?","Depende do quadro, dos objetivos e da resposta ao tratamento. A estimativa é feita após a avaliação e revisada conforme sua evolução."],
  ["O tratamento pode causar desconforto?","Algumas técnicas e exercícios podem gerar esforço ou desconforto leve. Você será orientado e o atendimento será ajustado sempre que necessário."],
  ["Como devo me preparar para a avaliação?","Use roupas confortáveis e, se tiver, leve exames, relatórios e a lista de medicamentos em uso."],
  ["Vocês atendem dores na coluna?","Sim. O atendimento inclui avaliação funcional e um plano individualizado para dores cervicais, torácicas e lombares."],
  ["Como faço para agendar?","Clique em um dos botões de WhatsApp, conte brevemente o que precisa e combine o melhor horário."]
];
