import {useGetDecksQuery} from "@/services/base-api.ts";

export const Decks = ()=>{
    const {data} = useGetDecksQuery()

    return <div>{JSON.stringify(data || '')}</div>
}