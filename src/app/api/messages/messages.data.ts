export type MessagesType = {
    id: number
    userId: number
    role: string
    message: string
    dispatchTime: string
}

export const messages: MessagesType[] = [
    {
        id: 1,
        userId: 1,
        role: 'user',
        message: 'Hello! How are you?',
        dispatchTime: ''
    },
    {
        id: 2,
        userId: 2,
        role: 'user',
        message: 'Good morning! Can you check my project?',
        dispatchTime: ''
    },
    {
        id: 3,
        userId: 3,
        role: 'user',
        message: 'Hi! I want to go for a walk, are you with me?',
        dispatchTime: ''
    },
]