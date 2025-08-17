import Image from "next/image";
import Index from "@/app/inicio/page";
import { redirect } from "next/navigation";
export default function Home() {
  return (
    redirect('/inicio')
  );
}
