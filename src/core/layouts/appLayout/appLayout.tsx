import { contacts } from '@/shared/constants/contacts';
import { AppShell, Burger, Flex, Group, List, Text } from '@mantine/core';
import { IconAddressBook } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export function AppLayout({ children }: { children: ReactNode }) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const path = usePathname()

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
        <Flex direction='column' gap='xl'>
          {contacts.map((x) => {
            return (
              <List key={x.id}>
                <Link href={x.link} className='link'>
                  <List.Item className={
                    path === x.link ? 'active' : 'sidebar'
                  }
                    h={40}
                  >
                    <Flex gap='md'>
                      <IconAddressBook />
                      <Text>{x.firstname} {x.lastname}</Text>
                    </Flex>
                  </List.Item>
                </Link>
              </List>
            )
          })}
        </Flex>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}