import Image from "next/image";

export default function Header(){
    return (
        <>
            <ul className="flex justify-between items-center gap-2">
                <li className="flex gap-2 items-center flex-1"><Image src="https://placehold.co/52x52/png" width={52} height={52} alt="placeholder"/><p className="text-black text-xl font-semibold leading-loose">Username</p></li>
                <li className="flex-1 flex justify-center text-black text-3xl font-semibold font leading-9">Home Page</li>
                <li className="flex-1 flex justify-end">
                    <ul className="flex gap-2">
                        <li><button className="btn rounded-[8px] text-sm font-semibold leading-tight bg-slate-700" type="button">Rejouer image précédente</button></li>
                        <li><button className="btn rounded-[8px] text-sm font-semibold leading-tight bg-neutral-800" type="button">Leaderboard</button></li>
                        <li><button className="btn rounded-[8px] text-sm font-semibold leading-tight bg-neutral" type="button">Voir les règles</button></li>
                    </ul>
                </li>
            </ul>
        </>
    )
}