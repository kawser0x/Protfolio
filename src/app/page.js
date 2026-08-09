import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./hero/page";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
    </main>
  );
}
