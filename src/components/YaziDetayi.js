import axios from "axios"
import React,{useState,useEffect} from "react"


const YaziDetayi =(props)=>{
    const {id} = props.match.params
    const [yaziDetayi,setYaziDetayi] = useState({});

    useEffect(()=>{
        axios
        .get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
        .then(response=>{
        setYaziDetayi(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])

    return (
        
        <React.Fragment>
        <h2 class="ui header">{yaziDetayi.title}</h2>
        <p>{yaziDetayi.created_at}</p>
        <p>{`Açıklama daha uygun olabilirdi. Yalnız bu API'ye herkes post atabildiği için açıklama kısımları ve başlık isimleri saçma ve alakasız değerler alabilir.${yaziDetayi.content}`}</p>
       
        </React.Fragment>
    ) 
}


export default YaziDetayi;