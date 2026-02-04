import Image from "next/image";
import { Container, Grid, GridCol, Stack } from "@mantine/core";
import LandingHeader from "../../../headers/landing-header/landing-header";
import classes from "./why-choose-us-section.module.scss";

export default function WhyChooseUsSection() {
  return (
    <div className={classes.sectionRoot}>
      <Container size="xl" className={classes.contentContainer}>
        <LandingHeader />
        <Grid>
          <GridCol span={{ base: 12, md: 6 }}>
            <Stack className={classes.textBlock}>
              <h2 className={classes.sectionTitle}>Why Choose Us?</h2>
              <Stack className={classes.paragraphsWrapper}>
                <p className={classes.paragraph}>
                  <span>Elite Tech Talent</span> are proud to collaborate with <span>RECO</span>, one of Vietnam&apos;s leading IT-focused HR ecosystems.
                </p>
                <p className={classes.paragraph}>
                  In an era where speed-to-market and technical precision define success, <span>Vietnam</span> has emerged as the world&apos;s most dynamic IT powerhouse.
                </p>
                <p className={classes.paragraph}>
                  Through our partnership with <span>RECO</span>, we can offer significant cost savings and access to a skilled and youthful IT workforce, connecting you with qualified professionals who align with your strategic objectives all backed by award-winning expertise, scalable staffing solutions, and a strong history of successful talent placements.
                </p>
              </Stack>
            </Stack>
          </GridCol>
          <GridCol span={{ base: 12, md: 6 }}>
            <div className={classes.flowerSectionWrapper}>
              <Image
                src="/three-thoudsands-flower-section.png"
                alt="Flower Background"
                fill
                className={classes.flowerSectionImage}
              />
            </div>
          </GridCol>
        </Grid>
      </Container>
    </div>
  );
}
