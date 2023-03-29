import React from 'react';

///component
import GameCard from '@/Components/templates/GameCard';


const index = ({data}) => {
    return (
        <div>
            <GameCard data={data}/>
        </div>
    );
};

export default index;


export async function getStaticProps(){
    const res=await fetch("http://localhost:4000/data")
    const data=await res.json()

    return{
        props:{data},
        revalidate:60*60
    }
}


