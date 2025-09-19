import ImgController from "@/app/components/ImgController";
import Objectives from "@/app/components/Objectives";
import Timer from "@/app/components/Timer";
import { TargetsProvider } from "@/app/context/targetContext";
import { CheckableCoordinatesMap, CoordinatesMap } from "@/app/lib/types";

export default async function GamePage({params}:{params:{id:string}}){

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const {id} = await params;
    const res:Response = await fetch(`${baseUrl}/api/coordinates/${id}`);
    const data:CoordinatesMap = await res.json();
    const checkableTargets:CheckableCoordinatesMap = Object.fromEntries(
        Object.entries(data).map(([key, value]) => [
            key,
            {...value, checked:false}
        ])
    );
    return (
        <main className="flex items-center justify-center self-stretch px-24 py-2.5 bg-slate-500 outline-1 outline-offset-[-1px] outline-black overflow-hidden flex-1">
            <TargetsProvider initial={checkableTargets}>
            <section id="tab" className="inline-flex flex-col justify-start items-start gap-2.5">
                <section id="scoreTimer" className="flex flex-row w-full justify-between">
                    <p className="text-4xl font-semibold leading-10">Score : 0000</p>
                    <Timer />
                </section>
                <section id="img" className="flex justify-center items-center">
                    <ImgController id={id}/>
                </section>
            </section>
            <section id="objectives">
                <Objectives/>        
            </section>
            </TargetsProvider>
        </main>
    )
}