


export function Toy({width, height, color} : {width: string, height: string, color: string}){
  return(
    <div 
    style={{width, height, backgroundColor: color}}
    className={"flex rounded-4xl relative justify-center"}>
    
      <div 
        style={{width}}
        className="h-1 bg-amber-50 absolute top-11 rounded-[2px]"
      />
      
      <div 
        style={{height}}
        className=" w-1 bg-amber-50 absolute rounded-[2px]" 
      />

    
    </div>
  )
}