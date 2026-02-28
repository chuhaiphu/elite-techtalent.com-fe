import { Flex } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import classes from './landing-header.module.scss';
import { MobileDrawer } from '../../sidebars/mobile-drawer/mobile-drawer';

export default function LandingHeader() {
  return (
    <Flex justify="space-between" align="center" className={classes.header}>
      <Link href={{ pathname: '/' }} className={classes.logoWrapper}>
        <Image
          className={classes.logo}
          src="/images/logo-with-text.webp"
          alt="Elite Tech Talent"
          fill={true}
        />
      </Link>
      {/* Desktop Nav */}
      <Flex className={classes.nav} gap="xl" visibleFrom="md">
        <Link href={{ pathname: '/' }} className={classes.navItem}>
          Home
        </Link>
        <Link href={{ pathname: '/why-us' }} className={classes.navItem}>
          Why Us
        </Link>
        <Link href={{ pathname: '/our-solution' }} className={classes.navItem}>
          Solutions
        </Link>
        <Link href={{ pathname: '/contact-us' }} className={classes.navItem}>
          Contact Us
        </Link>
        {/* <Link href={{ pathname: "/blogs" }} className={classes.navItem}>Blogs</Link> */}
      </Flex>

      {/* Mobile Drawer */}
      <MobileDrawer />
    </Flex>
  );
}
