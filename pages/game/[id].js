import Detailse from "@/Components/templates/Detailse";
import { useRouter } from "next/router";

const gameId = ({data}) => {
    const router=useRouter();
    console.log(data);
    if(router.isFallback){
        return <h1>Loading...</h1>
    }

    return <Detailse {...data}/>
};

export default gameId;


export async function getStaticPaths(){
    const res=await fetch("https://kamyar021.onrender.com/data");

    const json=await res.json();

    const data=json.slice(0,10);

    const paths=data.map((item)=>({
        params:{id:item.id.toString()}
    }))

    return{
        paths,
        fallback:true
    }
}


export async function getStaticProps(context){
    const {params}=context;

    const res=await fetch(`https://kamyar021.onrender.com/data/${params.id}`);

    const data=await res.json();

    if(!data.id){
        return{
            notFound:true
        }
    }

    return{
        props:{data},
        revalidate:60*60
    }
}
