import Layout from "@/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Image src='/bg-desktop-dark.jpg' alt="image :)" width={1440} height={720}
        className="hidden sm:flex sm:w-full h-1/4" />
      <Layout />
    </div>
  );
}

