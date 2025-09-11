export default function Card(props:{title:string, difficulty:number, best_score:number}){
    return(
    <article className="h-[250px] border-2 p-6 rounded-lg flex flex-col gap-6 bg-gray-700 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <section className="flex justify-start items-start">
            <h3 className="text-2xl font-semibold leading-loose">{props.title}</h3>
          </section>
          <section className="flex-1 h-11 flex justify-start items-start gap-3">
            <div className="groupDiv">
              <h4 className="leading-snug text-base font-semibold">Difficulté {props.difficulty}/5</h4>
              <p className="leading-snug text-base font-normal">Meilleur score : {props.best_score}</p>
            </div>
            <button className="btn" type="button">Jouer</button>
          </section>
        </article>
    )
}