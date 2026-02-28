'use client';
import { Burger, Drawer, Stack } from '@mantine/core';
import Link from 'next/link';
import classes from './mobile-drawer.module.scss';
import { useDisclosure } from '@mantine/hooks';

export function MobileDrawer() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Why Us', href: '/why-us' },
    { label: 'Solutions', href: '/our-solution' },
    { label: 'Contact Us', href: '/contact-us' },
    // { label: "Blogs", href: "/blogs" },
  ];

  return (
    <>
      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="md"
        color="#fff"
        size="sm"
      />
      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="xl"
        title={<span className={classes.drawerTitle}>Menu</span>}
        hiddenFrom="md"
        zIndex={1000}
        transitionProps={{ transition: 'fade', duration: 250 }}
        classNames={{
          content: classes.drawerContent,
          header: classes.drawerHeader,
        }}
      >
        <Stack gap="lg" mt="xl">
          {links.map((link) => (
            <Link
              key={link.href}
              href={{ pathname: link.href }}
              className={classes.mobileNavItem}
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}
