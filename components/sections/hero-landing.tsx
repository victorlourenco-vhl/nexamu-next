import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

export default function HeroLanding() {
  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-20">
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
        {/* Destaque inicial */}
        <div
          className={cn(
            buttonVariants({ variant: "outline", size: "sm", rounded: "full" }),
            "px-4"
          )}
        >
          <span className="mr-2">📚</span>
          Bem-vindo ao <strong className="ml-1">Nexamu</strong>
        </div>

        {/* Título principal */}
        <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
          Organize e acompanhe seus{" "}
          <span className="text-gradient_indigo-purple font-extrabold">
            simulados
          </span>{" "}
          de forma simples
        </h1>

        {/* Subtítulo */}
        <p className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          O Nexamu é a plataforma para você criar, organizar e analisar seus
          simulados. Simples, intuitivo e feito para acelerar seus estudos.
        </p>

        {/* Botões de ação */}
        <div className="flex justify-center space-x-2 md:space-x-4">
          <Link
            href="/register"
            prefetch={true}
            className={cn(
              buttonVariants({ size: "lg", rounded: "full" }),
              "gap-2"
            )}
          >
            <span>Começar agora</span>
            <Icons.arrowRight className="size-4" />
          </Link>

          {/* <Link
            href="/about"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
                rounded: "full",
              }),
              "px-5"
            )}
          >
            <Icons.gitHub className="mr-2 size-4" />
            Saiba mais
          </Link> */}
        </div>
      </div>
    </section>
  );
}
