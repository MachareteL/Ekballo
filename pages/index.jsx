import BotaoLogin from "../components/BotaoLogin";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <BotaoLogin />
    <Link href="/matricula">Matricular-se</Link>
    </>
  )
}
