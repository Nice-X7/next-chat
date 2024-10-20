import { Paper } from "@mantine/core";
import { ReactNode } from "react";

type ChatTypeProps = {
    children: ReactNode
}

export function ChatLayout({ children }: ChatTypeProps) {
    return (
        <Paper shadow="sm" radius="md" p="xl" w='80wh' withBorder>
            {children}
        </Paper>
    )
}