import LeaderTable from "./leadertable";

export default function Leaderboard(){
    return (
        <section id='leaderboard' className="w-full bg-slate-700 border-slate-800 rounded-lg outline-4 flex flex-col justify-start items-center gap-2.5 overflow-hidden outline-slate-800">
            <h2 className="text-white text-2xl font-semibold font-['Roboto'] leading-loose">Leaderboard de %MAP%</h2>
            <div className="self-stretch h-px border border-white"></div>
            <section className="flex justify-between gap-32">
                <LeaderTable/>
                <LeaderTable/>
            </section>
        </section>
    )
}