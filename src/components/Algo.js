import React, { useEffect } from 'react'
import Hash from './Hash';


const Algo = ({data,setName,setFreq}) => {

    useEffect(() => {
// console.log(data.data);
algo();
}, [data]);

const algo=()=>{ 
                                 // splitting string and including only characters 
                                //  filtering it out the whitspace element
    const arr=(data).split(/[^A-Za-z]+/).filter(element => element);
    // console.log(arr);
    const hashTable=new Hash();
    // hashTable.add("Hritick",1);
    // // console.log(hashTable.findValue("Hritick")!==null);
    // hashTable.update("Hritick",hashTable.findValue("Hritick")+1);
    // console.log(hashTable.findValue("Hritick"))
      hashWords(arr);
}

const hashWords=(arr)=>{
    const hashTable=new Hash();
                  for(let i=0;i<arr.length;i++){
                    const text=arr[i]?.toLowerCase();
                    if(hashTable.findValue(text)!=null){
                        hashTable.update(text,hashTable.findValue(text)+1);
                    }
                    else{
                        if(text!=null)
                        hashTable.add(text,1);
                    }
                  }
  
                //   for (const key of hashTable.keys()) {
                //     console.log(`${key}: ${hashTable.findValue(key)}`);
                //   }

                sortTable(hashTable);
              

}

const sortTable=(hashTable)=>{
    var keys = hashTable.keys();
    // for(let i=0;i<keys.length;i++){
    //     console.log(keys[i]);
    // }
    let i=0;
    keys.sort(function(a, b) {
        return hashTable.findValue(a) - hashTable.findValue(b);
    }).reverse().forEach(function(k) {
      //  console.log(hashTable.findValue(k));
       if(i<20){
             if(k.length>1){
       setName(prevNames => [...prevNames, k]); 
       setFreq(prevFreq => [...prevFreq, hashTable.findValue(k)]);i++;}}
    });
}

  return (
    <div></div>
  )
}

export default Algo