"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function CriarSimuladoForm() {
  const [nomeSimulado, setNomeSimulado] = useState("");
  const [tema, setTema] = useState("");
  const [numQuestoes, setNumQuestoes] = useState<number | "">("");
  const [dificuldade, setDificuldade] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [pasta, setPasta] = useState("");
  const [cronometrar, setCronometrar] = useState("nao");
  const [tempoEstimado, setTempoEstimado] = useState<number | "">("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Simula chamada para backend
    await new Promise((res) => setTimeout(res, 1500));

    console.log({
      nomeSimulado,
      tema,
      numQuestoes,
      dificuldade,
      comentarios,
      pasta,
      cronometrar,
      tempoEstimado,
    });

    setLoading(false);
    alert("Simulado gerado com sucesso!");
  }

  return (
    <div className="flex justify-center py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl space-y-6 rounded-2xl border p-6 shadow-sm"
      >
        <h1 className="text-center text-2xl font-bold">Criar Novo Simulado</h1>

        {/* Nome do Simulado */}
        <div className="space-y-2">
          <Label htmlFor="nome">Nome do Simulado</Label>
          <Input
            id="nome"
            required
            placeholder="Ex: Simulado de Matemática Avançada"
            value={nomeSimulado}
            onChange={(e) => setNomeSimulado(e.target.value)}
          />
        </div>

        {/* Pasta + Cronômetro */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div className="flex-1 space-y-2">
            <Label>Pasta de destino</Label>
            <Select onValueChange={setPasta}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma pasta" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="matematica">Matemática</SelectItem>
                <SelectItem value="fisica">Física</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Cronometrar tempo?</Label>
            <RadioGroup
              defaultValue="nao"
              onValueChange={(v) => setCronometrar(v)}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sim" id="sim" />
                <Label htmlFor="sim">Sim</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nao" id="nao" />
                <Label htmlFor="nao">Não</Label>
              </div>
            </RadioGroup>
          </div>

          {cronometrar === "sim" && (
            <div className="w-32 space-y-2">
              <Label htmlFor="tempo">Tempo (min)</Label>
              <Input
                id="tempo"
                type="number"
                min={1}
                max={999}
                value={tempoEstimado}
                onChange={(e) => setTempoEstimado(Number(e.target.value))}
              />
            </div>
          )}
        </div>

        {/* Tema */}
        <div className="space-y-2">
          <Label htmlFor="tema">Tema / Assunto</Label>
          <Input
            id="tema"
            required
            placeholder="Ex: Álgebra, Física, História"
            value={tema}
            onChange={(e) => setTema(e.target.value)}
          />
        </div>

        {/* Número de Questões */}
        <div className="space-y-2">
          <Label htmlFor="num">Número de Questões</Label>
          <Input
            id="num"
            type="number"
            required
            min={1}
            max={100}
            placeholder="Ex: 20"
            value={numQuestoes}
            onChange={(e) => setNumQuestoes(Number(e.target.value))}
          />
        </div>

        {/* Dificuldade */}
        <div className="space-y-2">
          <Label>Nível de Dificuldade</Label>
          <Select onValueChange={setDificuldade}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma opção" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="facil">Fácil</SelectItem>
              <SelectItem value="medio">Médio</SelectItem>
              <SelectItem value="dificil">Difícil</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Observações */}
        <div className="space-y-2">
          <Label htmlFor="comentarios">Observações</Label>
          <Textarea
            id="comentarios"
            placeholder="Ex: Priorizar questões de álgebra linear."
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
          />
        </div>

        {/* Botão */}
        <Button type="submit" className="w-full font-bold" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Gerando
              questões...
            </>
          ) : (
            "Gerar Simulado com IA"
          )}
        </Button>
      </form>
    </div>
  );
}
