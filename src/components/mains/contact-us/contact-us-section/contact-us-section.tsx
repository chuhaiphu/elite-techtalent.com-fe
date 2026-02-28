import { Container, Grid, GridCol, Group, Stack, Text, Box } from '@mantine/core';
import { IoMail, IoCall, IoLocationSharp } from 'react-icons/io5';
import Image from 'next/image';
import LandingHeader from '@/components/headers/landing-header/landing-header';
import ContactUsForm from '@/components/mains/contact-us/contact-us-section/contact-us-form/contact-us-form';
import classes from './contact-us-section.module.scss';

export default function ContactUsSection() {
  return (
    <section className={classes.sectionRoot}>
      <div className={classes.backgroundWrapper}>
        <Image
          src="/images/building-background.webp"
          alt="Background"
          fill
          className={classes.backgroundImage}
        />
        <div className={classes.overlay} />
      </div>

      <Container size="xl" className={classes.contentContainer}>
        <LandingHeader />

        {/* Hero Section */}
        <Stack className={classes.heroSection} gap="xl">
          <h2 className={classes.heroTitle}>
            Ready to transform your IT workforce?
          </h2>
          <Stack className={classes.paragraphsWrapper} gap="md">
            <p className={classes.heroParagraph}>
              Whether you are scaling up for a new project or looking for ongoing
              support, our team is committed to delivering skilled professionals
              tailored to your business needs – all while keeping costs competitive
              and timelines tight.
            </p>
            <p className={classes.heroParagraph}>
              Discover the difference that flexible, expert-led staffing solutions
              can make for your organisation. Reach out to discuss your needs,
              request a consultation, or learn more about our services.
            </p>
          </Stack>
        </Stack>

        <Grid className={classes.gridMain} gutter={0}>
          <GridCol span={{ base: 12, md: 4.5 }} className={classes.leftColumn}>
            <Stack className={classes.leftStack} gap={50}>
              <Box>
                <h2 className={classes.sectionTitle}>Contact Us</h2>
                <div className={classes.titleUnderline} />
              </Box>

              <Stack gap={30}>
                {/* Email */}
                <Group align="center" wrap="nowrap" gap="md">
                  <IoMail size={26} className={classes.infoIcon} />
                  <Stack gap={0}>
                    <Text className={classes.infoLabel}>Email</Text>
                    <Text className={classes.infoValue}>
                      info@elite-techtalent.com
                    </Text>
                  </Stack>
                </Group>

                {/* Phone */}
                <Group align="center" wrap="nowrap" gap="md">
                  <IoCall size={26} className={classes.infoIcon} />
                  <Stack gap={0}>
                    <Text className={classes.infoLabel}>Phone</Text>
                    <Text className={classes.infoValue}>(+44) 07498535438</Text>
                  </Stack>
                </Group>

                {/* Location */}
                <Group align="center" wrap="nowrap" gap="md">
                  <IoLocationSharp size={26} className={classes.infoIcon} />
                  <Stack gap={0}>
                    <Text className={classes.infoLabel}>Location</Text>
                    <Text className={classes.infoValue}>
                      71-75 Shelton Street, Covent Garden, London WC2H 9JQ
                    </Text>
                  </Stack>
                </Group>
              </Stack>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 7.5 }} className={classes.rightColumn}>
            <ContactUsForm />
          </GridCol>
        </Grid>
      </Container>
    </section>
  );
}
