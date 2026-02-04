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
          <div className={classes.heroTopGroup}>
            <h2 className={classes.heroTitle}>Stay Ahead</h2>
            <p className={classes.heroEyebrow}>
              in a rapidly changing digital world
            </p>
          </div>
          <div className={classes.heroBottomGroup}>
            <h3 className={classes.heroSubtitle}>
              Elite Tech Talent
            </h3>
            <h4 className={classes.heroTagline}>
              Your partner of choice for transformative IT staffing solutions
            </h4>
          </div>
        </Stack>
      </Container>
    </section>
  );
}