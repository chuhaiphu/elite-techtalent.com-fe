'use client';

import React, { useMemo } from 'react';
import { AppShellNavbar, Text, Burger, Group } from '@mantine/core';
import { NavItemProps } from './dashboard-nav/_props';
import { VersionSection } from '@/components/primitives/version-section/version-section';
import { DashboardNav } from './dashboard-nav/dashboard-nav';
import classes from './dashboard-sidebar.module.scss';
import { GoDot, GoDotFill } from 'react-icons/go';
import HomeIcon from '@/components/icons/vinaup-home-icon';
import { useLayoutSiderStore } from '@/libs/zustand/layout-sider-store';
import { IUserResponse } from '@/interfaces/user-interface';

interface DashboardSidebarProps {
  userData: IUserResponse;
}

export default function DashboardSidebar({ userData }: DashboardSidebarProps) {
  const { close } = useLayoutSiderStore();

  const navItems: NavItemProps[] = useMemo(() => {
    const items: NavItemProps[] = [
      {
        key: 'admin',
        label: 'Admin Home',
        path: '/admin',
        rightSection: <HomeIcon size={20} />,
        rightSectionActive: <HomeIcon size={20} stroke="var(--vinaup-yellow)" />,
        isRoot: true,
      },
      {
        key: 'blog',
        label: 'Blog',
        path: '/admin/blog',
        defaultOpened: true,
        childrens: [
          {
            key: 'all-blogs',
            label: 'All Blogs',
            path: '/admin/blog',
          },
          {
            key: 'blog-categories',
            label: 'Blog Categories',
            path: '/admin/blog-category',
          },
        ],
      },
      {
        key: 'page',
        label: 'Pages',
        rightSection: <GoDot size={24} />,
        rightSectionActive: <GoDotFill color="var(--vinaup-yellow)" size={24} />,
        path: '/admin/page',
      },
      {
        key: 'control-panel',
        label: 'Control Panel',
        path: '/admin/menu',
        defaultOpened: true,
        childrens: [
          {
            key: 'menu',
            label: 'Menu',
            path: '/admin/menu',
          },
          {
            key: 'media',
            label: 'Media',
            path: '/admin/media',
          },
        ],
      },
      {
        key: 'setting',
        label: 'Settings',
        rightSection: <GoDot size={24} />,
        rightSectionActive: <GoDotFill color="var(--vinaup-yellow)" size={24} />,
        path: '/admin/setting',
      },
    ];
    // Add User Management menu only for superadmin
    if (userData.role === 'supadmin') {
      items.push({
        key: 'user',
        label: 'Users',
        rightSection: <GoDot size={24} />,
        rightSectionActive: <GoDotFill color="var(--vinaup-yellow)" size={24} />,
        path: '/admin/user',
      });
    }

    return items;
  }, [userData.role]);

  return (
    <AppShellNavbar classNames={{ navbar: classes.dashboardSidebarRoot }}>
      <div className={classes.dashboardSidebarContainer}>
        <div className={classes.containerTop}>
          <Group justify="space-between" align="center" pr="md">
            <Text className={classes.logoText}>Elite Tech Talent</Text>
            <Burger
              classNames={{
                root: classes.burger,
              }}
              opened={true}
              onClick={close}
              hiddenFrom="xs"
              size="xs"
              color="white"
            />
          </Group>
          <DashboardNav navItems={navItems} />
        </div>
        <div className={classes.containerBottom}>
          <VersionSection />
        </div>
      </div>
    </AppShellNavbar>
  );
}
