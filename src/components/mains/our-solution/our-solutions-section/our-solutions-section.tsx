import LandingHeader from "@/components/headers/landing-header/landing-header";
import { WeOfferBranch } from "@/components/mains/our-solution/our-solutions-section/we-offer-branch/we-offer-branch";
import { Container, Grid, GridCol, Stack } from "@mantine/core";
import Image from "next/image";
import classes from "./our-solutions-section.module.scss";

export default function OurSolutionsSection() {
  return (
    <div className={classes.sectionRoot}>
      <div className={classes.backgroundStack}>
        <div className={classes.baseBackground}>
          <Image
            src="/general-background.webp"
            alt="Background"
            fill
            className={classes.backgroundImage}
          />
        </div>
        <div className={classes.overlay} />
      </div>
      <Container size="xl" className={classes.contentContainer}>
        <LandingHeader />
        <Grid>
          <GridCol span={{ base: 12, md: 6 }}>
            <Stack className={classes.textBlock}>
              <h2 className={classes.sectionTitle}>Our Solutions</h2>
              <Stack>
                <p className={classes.subtitle}>
                  We don’t just fill roles
                </p>
                <p className={classes.subtitle}>
                  WE BUILD PARTNERSHIPS
                </p>
              </Stack>
              <Stack className={classes.paragraphsWrapper}>
                <p className={classes.paragraph}>
                  Our clients rely on us for strategic staffing support, rapid response times, and a personalised approach that aligns with their goals and culture.
                </p>
              </Stack>
            </Stack>
          </GridCol>
          <GridCol span={{ base: 12, md: 6 }}>
            <WeOfferBranch />
          </GridCol>
        </Grid>
      </Container>
    </div>
  );
}