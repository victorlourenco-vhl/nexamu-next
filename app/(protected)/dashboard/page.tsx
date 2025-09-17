import { getCurrentUser } from "@/lib/session";
import { constructMetadata } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DashboardHeader } from "@/components/dashboard/header";
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder";

export const metadata = constructMetadata({
  title: "Dashboard – SaaS Starter",
  description: "Create and manage content.",
});

export default async function DashboardPage() {
  const user = await getCurrentUser();

  return (
    <>
      <DashboardHeader
        heading="Simulados"
      />
      <EmptyPlaceholder>
        <EmptyPlaceholder.Icon name="post" />
        <EmptyPlaceholder.Title>Nenhum simulado disponível</EmptyPlaceholder.Title>
        <EmptyPlaceholder.Description>
          Você ainda não possui simulados. Clique no botão abaixo e crie o seu primeiro para começar agora mesmo.
        </EmptyPlaceholder.Description>
        <Button>Criar novo simulado</Button>
      </EmptyPlaceholder>
    </>
  );
}
