import { Children, createContext, useEffect, useState } from "react";

const ContextoTeste = createContext([])


export function Contextozinho({children})
{

    const [data, SetData] = useState([])
    
    
    useEffect(()=>{
        const TableCardType = [
            {nameType: "Pokemon", Url: "https://api.pokemontcg.io/v2/cards", requestData: undefined},
        ]

        let tableData = []
        TableCardType.forEach(ApiType => 
          {
              fetch(ApiType.Url, {
                  method: 'GET',
              }).then(resultType => resultType.json()).then((result)=>{
    
                result.data.forEach(element => {
                  if(element.tcgplayer != undefined || element.tcgplayer != null)
                  {
                    tableData.push(element)
                  }
                  else {
                   
                  }
                });
                 SetData(result)
              })
          });
    }, [])
    

    return (
        <ContextoTeste.Provider value={data}>
            {children}
        </ContextoTeste.Provider>
    )
}

export default ContextoTeste