import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Head from "next/head";
import Platforms from "../components/Platforms";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-gray-100 font-rubik">
      <Head>
        <title>Deep Code - Code In Arabic </title>
      </Head>
      <Hero />
      <Problem />
      <Platforms />
    </div>
  );
}
