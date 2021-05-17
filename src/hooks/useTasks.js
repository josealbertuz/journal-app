import { useQuery } from "react-query"
import { getAllTasks } from '../api';

export const useTasks = () => {

    return useQuery('getAllTasks', getAllTasks, {
        select : data => data.data.tasks,
        placeholderData : [],
        staleTime : Infinity
    });

}