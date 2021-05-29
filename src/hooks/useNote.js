import { useQuery } from "react-query"
import { getNoteById } from "../api"

export const useNote = (noteId) => {

    return useQuery(['getNoteById', noteId], () => getNoteById(noteId), {
        select : (data) => data.data.note,
        staleTime : Infinity,
        placeholderData : {}
    });

}