'use client'

import { queryClient } from "@/shared/lib/reactQuery"
import { MantineProvider } from "@mantine/core"
import { ModalsProvider } from "@mantine/modals"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import { AppLayout } from "../layouts/AppLayout"

export function ClientProvider({children}: {children: ReactNode}) {
    return <QueryClientProvider client={queryClient}>
        <MantineProvider defaultColorScheme="light">
            <ModalsProvider>
                <AppLayout>
                    {children}
                </AppLayout>
            </ModalsProvider>
        </MantineProvider>
    </QueryClientProvider>
}