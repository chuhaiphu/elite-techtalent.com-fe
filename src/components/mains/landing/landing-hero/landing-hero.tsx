import { Container, Stack } from "@mantine/core";
import classes from "./landing-hero.module.scss";
import LandingHeader from "../../../headers/landing-header/landing-header";

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
        <LandingHeader />

        <Stack className={classes.heroBody}>
          <h2 className={classes.heroTitle}>Stay Ahead</h2>
          <p className={classes.heroEyebrow}>
            in a rapidly changing IT recruitment world
          </p>
        </Stack>
      </Container>
    </section>
  );
}