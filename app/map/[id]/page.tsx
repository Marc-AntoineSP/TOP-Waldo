import ImgController from "@/app/components/ImgController";
import Timer from "@/app/components/Timer";

export default async function GamePage({params}:{params:{id:string}}){
    
    const {id} = await params;
    return (
        <main className="flex items-center justify-center self-stretch px-24 py-2.5 bg-slate-500 outline-1 outline-offset-[-1px] outline-black overflow-hidden flex-1">
            <div id="tab" className="inline-flex flex-col justify-start items-start gap-2.5">
                <section id="scoreTimer" className="flex flex-row w-full justify-between">
                    <p className="text-4xl font-semibold leading-10">Score : 0000</p>
                    <Timer />
                </section>
                <section id="img" className="flex justify-center items-center">
                    <ImgController id={id}/>
                </section>
                <section id="objectives">
                    <Objectives/>        
                </section>
            </div>
        </main>
    )
}