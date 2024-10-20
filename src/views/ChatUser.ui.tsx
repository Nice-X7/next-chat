'use client'

import { ChatLayout } from "@/core/layouts/chatLayout/chatLayout";
import { contacts } from "@/shared/constants/contacts";
import { Button, Flex, Loader, Paper, ScrollArea, Text, TextInput } from "@mantine/core";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function ChatUserView() {
    const [messages, setMessages] = useState<string[]>([]);
    const [currentMessage, setCurrentMessage] = useState("");
    const pathname = usePathname()
    const link = pathname.split('/').pop();

    const handleSendMessage = () => {
        if (currentMessage.trim()) {
            setMessages([...messages, currentMessage]);
            setCurrentMessage("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const user = contacts.find(x => x.link === `/${link}`)
    if (!user) return <Loader />

    return <ChatLayout>
        <Text fz={24}>
            {user.firstname} {user.lastname}
        </Text>
        <Paper
            w='100%'
            h='670px'
            bg='#eeeeee'
        >
            <ScrollArea>

            </ScrollArea>
        </Paper>
        <Flex mt={20}>
            <TextInput
                w='85%'
                placeholder="Введите ваше сообщение"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.currentTarget.value)}
                onKeyDown={handleKeyDown}
            />
            <Button
                w='15%'
                h={42}
                ml={30}
                onClick={handleSendMessage}
                disabled={currentMessage === '' ? true : false}
            >
                Отправить
            </Button>
        </Flex>
    </ChatLayout>
}