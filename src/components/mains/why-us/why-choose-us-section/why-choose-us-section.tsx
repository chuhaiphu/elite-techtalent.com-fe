import Image from "next/image";
import { Container, Grid, GridCol, Stack } from "@mantine/core";
import LandingHeader from "../../../headers/landing-header/landing-header";
import WhyUsFlower from "../why-us-flower/why-us-flower";
import classes from "./why-choose-us-section.module.scss";

export default function WhyChooseUsSection() {
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
      </div>
      <Container size="xl" className={classes.contentContainer}>
        <LandingHeader />
        <Grid>
          <GridCol span={{ base: 12, md: 6 }}>
            <Stack className={classes.textBlock}>
              <h2 className={classes.sectionTitle}>Why Choose Us?</h2>
              <Stack className={classes.paragraphsWrapper}>
                <p className={classes.paragraph}>
                  <span>Elite Tech Talent</span> are proud to collaborate with <span>RECO HR Solutions</span>, one of Vietnam&apos;s leading IT-focused HR ecosystems.
                </p>
                <p className={classes.paragraph}>
                  Partnering with <span>RECO</span> means tapping into Vietnam&apos;s largest IT talent ecosystem, backed by award-winning expertise, scalable solutions, and a proven track record of delivering exceptional staffing outcomes.
                </p>
              </Stack>
            </Stack>
          </GridCol>
          <GridCol span={{ base: 12, md: 6 }}>
            <WhyUsFlower />
          </GridCol>
        </Grid>
      </Container>
    </div>
  );
}
