import { Container, Flex, Stack } from "@mantine/core";
import classes from "./landing-hero.module.scss";
import Image from "next/image";
import Link from "next/link";
import { MobileDrawer } from "../mobile-drawer/mobile-drawer";

export default function LandingHero() {

  return (
    <section className={classes.heroRoot}>
      <video
        className={classes.heroVideo}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/header-background-video.mp4" type="video/mp4" />
      </video>
      <div className={classes.heroOverlay}></div>
      <Container className={classes.heroContainer} size="xl">
        <Flex justify="space-between" align="center" className={classes.heroHeader}>
          <div className={classes.logoWrapper}>
            <Image
              className={classes.logo}
              src="/logo-with-text.webp"
              alt="Elite Tech Talent"
              fill={true}
            />
          </div>
          {/* Desktop Nav */}
          <Flex className={classes.nav} gap="xl" visibleFrom="md">
            <Link href={{ pathname: "/why-us" }} className={classes.navItem}>Why Us</Link>
            <Link href={{ pathname: "/solutions" }} className={classes.navItem}>Solutions</Link>
            <Link href={{ pathname: "/contact-us" }} className={classes.navItem}>Contact Us</Link>
            <Link href={{ pathname: "/blogs" }} className={classes.navItem}>Blogs</Link>
          </Flex>

          {/* Mobile Drawer */}
          <MobileDrawer />
        </Flex>


        <Stack className={classes.heroBody}>
          <h1 className={classes.heroTitle}>Stay Ahead</h1>
          <p className={classes.heroEyebrow}>
            in a rapidly changing IT recruitment world
          </p>
        </Stack>
      </Container>
    </section>
  );
}