import Image from "next/image";
import { Container, Stack } from "@mantine/core";
import LandingHeader from "@/components/headers/landing-header/landing-header";
import classes from "./contact-us-hero.module.scss";

export default function ContactUsHero() {
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

        <Stack className={classes.textBlock} gap="xl">
          <h2 className={classes.sectionTitle}>
            Ready to transform your IT workforce?
          </h2>
          <Stack className={classes.paragraphsWrapper}>
            <p className={classes.paragraph}>
              Whether you are scaling up for a new project or looking for
              ongoing support, our team is committed to delivering skilled
              professionals tailored to your business needs – all while keeping
              costs competitive and timelines tight.
            </p>
            <p className={classes.paragraph}>
              Discover the difference that flexible, expert-led staffing
              solutions can make for your organisation. Reach out to discuss
              your needs, request a consultation, or learn more about our
              services.
            </p>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

