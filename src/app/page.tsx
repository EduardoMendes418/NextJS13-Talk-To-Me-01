import Button from "../components/Button/Button";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import { Input } from "../components/Input/Input";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="mx-auto w-full h-full flex flex-1 items-center justify-center">
        <Container>
          <div className="max-w-[580px] w-full bg-secondary p-4 rounded-lg">
            <div>
              <span>Ingressar</span>
              <span>Nova Reuniao</span>
            </div>
            <div className="space-y-4">
              <Input placeholder="Digite o código da reunião" type="text" />
              <Input placeholder="Digite o código da reunião" type="text" />
              <Button title="Entrar" type="button" />
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
