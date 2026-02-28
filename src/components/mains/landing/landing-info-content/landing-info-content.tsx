import Image from 'next/image';
import classes from './landing-info-content.module.scss';
import { Container, Flex, Grid, GridCol, Stack } from '@mantine/core';

export default function LandingInfoContent() {
  return (
    <div className={classes.infoContentRoot}>
      <div className={classes.backgroundStack}>
        <div className={classes.baseBackground}>
          <Image
            src="/images/general-background.webp"
            alt="Background"
            fill={true}
            className={classes.backgroundImage}
          />
        </div>
        <div className={classes.overlay} />
      </div>
      <Container className={classes.contentContainer} size="xl">
        <Stack gap="xl">
          <h2 className={classes.contentTitle}>What can you expect?</h2>
          <Grid
            classNames={{
              col: classes.contentCol,
              root: classes.contentGridRoot,
            }}
          >
            <GridCol span={{ base: 12, md: 4 }}>
              <Stack className={classes.contentColContent}>
                <h3 className={classes.contentColTitle}>Faster Resolutions</h3>
                <p className={classes.contentColDescription}>
                  Agile and responsive support to meet urgent needs with confidence
                  and assurance.
                </p>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, md: 4 }}>
              <Stack className={classes.contentColContent}>
                <h3 className={classes.contentColTitle}>
                  Personalized Interactions
                </h3>
                <p className={classes.contentColDescription}>
                  Our consultative and collaborative approach helps deliver
                  workforce plans fit for the future.
                </p>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, md: 4 }}>
              <Stack className={classes.contentColContent}>
                <h3 className={classes.contentColTitle}>Skills & Experience</h3>
                <p className={classes.contentColDescription}>
                  Access to a network of top-tier IT professionals, carefully
                  selected to guarantee innovation and reliability for your
                  organisation.
                </p>
              </Stack>
            </GridCol>
          </Grid>
          <Flex mb="xl">
            <div className={classes.hexagonBorder}>
              <div className={classes.hexagonInner}>
                <Image
                  src="/images/partnership-thumbnail.webp"
                  alt="Partnership"
                  fill={true}
                  className={classes.hexagonImage}
                />
              </div>
            </div>
            <Stack className={classes.textStack} align="center" justify="center">
              <h3 className={classes.textContentTitle}>The Power of Partnership</h3>
              <p className={classes.textContentDescription}>
                Together, we can drive innovation and growth for your business,
                maximising long term success.
              </p>
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </div>
  );
}
