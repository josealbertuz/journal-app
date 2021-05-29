import { useQuery } from "react-query"
import { getAllNotes } from "../api"

export const useNotes = () => {
    return useQuery('getAllNotes', getAllNotes, {
        select : (data) => data.data.notes,
        staleTime : Infinity,
        placeholderData : []
    });
}