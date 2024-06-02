import Layout from "@/components/Layout";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <img src='/bg-desktop-dark.jpg' alt="image :)"
        className="w-full h-1/4" />
      <Layout />
    </div>
  );
}

