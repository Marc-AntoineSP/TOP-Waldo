import ImgController from "@/app/components/ImgController";
import Objectives from "@/app/components/Objectives";
import Timer from "@/app/components/Timer";
import { TargetsProvider } from "@/app/context/targetContext";
import { CheckableCoordinatesMap, CoordinatesMap } from "@/app/lib/types";


export default async function GamePage({ params }: { params: Promise<{ id: string }> }){

    const {id} = await params;
    const baseUrl =
        process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000";
    const res:Response = await fetch(`${baseUrl}/api/coordinates/${id}`, { cache: "no-store" });
    if (!res.ok) {
        const text = await res.text();
        console.error("API error response:", text);
        throw new Error(`Failed to fetch coordinates for id ${id}`);
    }
    const data:CoordinatesMap = await res.json();
    const checkableTargets:CheckableCoordinatesMap = Object.fromEntries(
        Object.entries(data).map(([key, value]) => [
            key,
            {...value, checked:false}
        ])
    );
    return (
        <main className="flex items-center justify-center self-stretch px-24 py-2.5 bg-slate-500 outline-1 outline-offset-[-1px] outline-black overflow-hidden flex-1 gap-4">
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
            <section id="objectives" className="flex flex-col justify-start items-center font-semibold leading-10 gap-4 self-start">
                <Objectives/>        
            </section>
            </TargetsProvider>
        </main>
    )
}