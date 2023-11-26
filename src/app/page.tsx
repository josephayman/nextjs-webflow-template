import Nav from "@/app/ui/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p className="text-4xl font-bold">Hello World</p>
      </main>
    </>
  );
}
