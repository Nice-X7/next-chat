import { usersQueries } from '@/entities/users';
import { AppShell, Burger, Button, Group, List, Loader } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { ReactNode } from 'react';

export function AppLayout({ children }: { children: ReactNode }) {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

    const { data: users } = usersQueries.useGetUsers()

    if (!users) return <Loader />

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                    <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <List listStyleType='none'>
                    {
                        users.data.map((x) => {
                            return <List.Item key={x.id} mb='md'>
                                {
                                    x.role === 'user' ?
                                    <Button w={270}>
                                        <Link href={`/user/${x.id}`} className='link_user'>
                                            {x.username}
                                        </Link> 
                                    </Button> : null
                                }
                            </List.Item>
                        })
                    }
                </List>
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
}