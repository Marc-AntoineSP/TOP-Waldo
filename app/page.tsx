import Card from "./components/card";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col justify-center items-center bg-slate-500 p-24"> 
      {/* HAUT DE LA PAGE */}
      <section id="header" className="w-full flex justify-center items-center rounded-lg border-4 border-black bg-gray-700 p-[10px]">
        <h2 className="text-4xl font-semibold leading-10">WHERE IS WALDO ?</h2>
      </section>
      {/* DANS LE CARD CONTAINER */}
      <section id="cardContainer" className="p-24 w-full flex-1 grid grid-cols-[repeat(auto-fit,_minmax(calc(100%/4),_1fr))] gap-6">
        <Card title={"test"} difficulty={2} best_score={999}/>
        <Card title={"test"} difficulty={2} best_score={999}/>
        <Card title={"test"} difficulty={2} best_score={999}/>
        <Card title={"test"} difficulty={2} best_score={999}/>
        <Card title={"test"} difficulty={2} best_score={999}/>
        <Card title={"test"} difficulty={2} best_score={999}/>
      </section>
      {/* DANS LE LEADERBOARD */}
      <section id="leaderboard"></section>
    </main>
  );
}
