import { useQuery } from "@tanstack/react-query"
import axios from "axios"

type messagesType = {
    id: number
    userId: number
    role: string
    message: string
    dispatchTime: string
}

export function useGetMessages() {
    return useQuery({
        queryKey: ['message'],
        queryFn: () => axios.get<messagesType[]>('http://localhost:3000/api/messages')
    })
}