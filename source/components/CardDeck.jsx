import { Soda } from "@dorkodu/soda";

export function CardDeck({showcase, children}) {
  let classSuffix = (showcase) ? " --showcase" : "";
  
  return (
    <div class={"card-deck" + classSuffix} style="">
      {children}
    </div>
  )
}