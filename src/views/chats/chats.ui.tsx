"use client";

import { messagesQueries } from "@/entities/messages";
import { usersQueries } from "@/entities/users";
import {
    Button,
    Flex,
    Input,
    Loader,
    Paper,
    ScrollArea,
    Text,
} from "@mantine/core";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";

type MessagesType = {
    id: number;
    userId: number;
    role: string;
    message: string;
    dispatchTime: string;
};

export function ChatsViews(): ReactNode {
    const path = usePathname();
    const { data: users } = usersQueries.useGetUsers();
    const { data: messages } = messagesQueries.useGetMessages();

    if (!users) return <Loader />;

    const [messageList, setMessageList] = useState<MessagesType[]>([]);
    const [currentMessage, setCurrentMessage] = useState<string>("");

    useEffect(() => {
        if (messages?.data) {
            setMessageList(messages.data);
        }
    }, [messages]);

    if (!messages) return <Loader />;

    const userIdFromPath = Number(path.split("/").pop());
    const user = users.data.find((x) => x.id === userIdFromPath);

    const handleSendMessage = async () => {
        if (currentMessage) {
          try {
            const response = await fetch("/api/messages", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                role: "admin",
                userId: userIdFromPath,
                message: currentMessage,
              }),
            });
    
            if (response.ok) {
              const newMessage: MessagesType = await response.json();
              setMessageList((prevList) => [...prevList, newMessage]);
              setCurrentMessage("");
            } else {
              console.error("Failed to send message:", response.statusText);
            }
          } catch (error) {
            console.error("Error sending message:", error);
          }
        }
      };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <Flex direction="column">
            <Paper withBorder h={50}>
                <Text ta="center" mt={10} fw={600} size='lg'>{user ? user.username : <Loader />}</Text>
            </Paper>
            <Paper withBorder h="76vh" mt={10}>
                <Flex direction="column" p="md" gap="sm" h="100%">
                    <ScrollArea h="auto">
                        {messageList
                            .filter((x) => x.userId === userIdFromPath)
                            .map((x, index) => (
                                <Paper
                                    p="lg"
                                    key={index}
                                    bg={x.role === "admin" ? "#399bae" : "#228be6"}
                                    ml={x.role === "admin" ? "auto" : "flex-start"}
                                    maw="40%"
                                    radius="lg"
                                    ta={x.role === "admin" ? "end" : "start"}
                                    mb={30}
                                    mr={20}
                                    c="#fff"
                                >
                                    <Text fw={600}>from: {x.role === 'user' ? user?.username : 'Мираев Мухаммад'}</Text>
                                    <Text mt={30}>{x.message}</Text>

                                    <Text mt={30} mr='100%'>{x.dispatchTime}</Text>
                                </Paper>
                            ))}
                    </ScrollArea>
                </Flex>
            </Paper>
            <Flex gap="lg" mt={20}>
                <Input
                    w="92.5%"
                    placeholder="Введите ваше сообщение"
                    className="input"
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    value={currentMessage}
                />
                <Button w={100} onClick={handleSendMessage}>
                    send
                </Button>
            </Flex>
        </Flex>
    );
}
