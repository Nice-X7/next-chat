'use client'

import { MantineProvider } from "@mantine/core"
import { ModalsProvider } from "@mantine/modals"
import { ReactNode } from "react"
import { AppLayout } from "../layouts/appLayout/appLayout"
import { theme } from "@/shared/constants"

type ClientProviderProps = {
    children?: ReactNode
}

export function ClientProvider({children}: ClientProviderProps) {
    return (
        <MantineProvider theme={theme}>
            <ModalsProvider>
                <AppLayout>
                    {children}
                </AppLayout>
            </ModalsProvider>
        </MantineProvider>
    )
}