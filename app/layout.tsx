import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"FisioVita | Fisioterapia e Reabilitação",description:"Fisioterapia personalizada para alívio de dores, recuperação de movimentos, reabilitação e melhoria da qualidade de vida. Agende sua avaliação.",openGraph:{title:"FisioVita | Fisioterapia e Reabilitação",description:"Cuidado individualizado para você se movimentar melhor.",type:"website",locale:"pt_BR"},twitter:{card:"summary_large_image"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
