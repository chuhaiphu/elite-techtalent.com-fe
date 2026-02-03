import Image from "next/image";
import classes from "./landing-intro-content.module.scss";
import { Container, Flex, Stack } from "@mantine/core";

export default function LandingIntroContent() {
  return (
    <div className={classes.introContentRoot}>
      <div className={classes.backgroundStack}>
        <div className={classes.baseBackground}>
          <Image
            src="/general-background.webp"
            alt="Background"
            fill={true}
            className={classes.backgroundImage}
          />
        </div>
        <div className={classes.overlayBackground}>
          <Image
            src="/shakehand-with-map.webp"
            alt="Shakehand with map"
            fill={true}
            className={classes.backgroundImage}
          />
        </div>
      </div>
      <Container className={classes.textContentTop} size="xl">
        <Flex align="center" justify="center" h="100%">
          <Stack gap="md" align="center">
            <h1 className={classes.mainTitle}>
              Elite Tech Talent: Your partner of choice for
            </h1>
            <h2 className={classes.subTitle}>Transformative IT staffing solutions</h2>
          </Stack>
        </Flex>
      </Container>
      <Container className={classes.textContentBottom} size="xl">
        <Flex align="center" justify="center" h="85%">
          <Stack gap={36}>
            <p className={classes.firstParagraph}><span>Elite Tech Talent</span> is dedicated to connecting businesses with top-tier technology professionals who meet the unique needs of your business.  We understand the right people make all the difference - those who not only possess the required technical expertise, but also align with your company’s values and culture.
            </p>
            <p className={classes.secondParagraph}>Whether you’re scaling your tech team, tackling a complex project, or navigating digital transformation, our approach is consultative and collaborative, ensuring we deliver staffing solutions that drive <span>innovation</span> and <span>growth</span>, contributing to your long-term success.
            </p>
          </Stack>
        </Flex>
      </Container>
    </div>
  );
}