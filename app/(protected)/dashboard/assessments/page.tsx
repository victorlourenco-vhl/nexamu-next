import { DashboardHeader } from "@/components/dashboard/header";
import { constructMetadata } from "@/lib/utils";

import CriarSimuladoForm from "./_components/create-assessment";

export const metadata = constructMetadata({
  title: "Criar novo simulado",
  description: "Criando um novo simulado",
});

export default function Assessments() {
  return (
    <>
      <DashboardHeader
        heading="Simulados"
        text="Crie agora mesmo um novo simulado."
      />

      <CriarSimuladoForm />
    </>
  );
}
