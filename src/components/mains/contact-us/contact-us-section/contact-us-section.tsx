"use client";

import {
  Button,
  Container,
  Grid,
  GridCol,
  Group,
  Stack,
  TextInput,
  Textarea,
  Text,
  Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IoMail, IoCall, IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import { useTransition } from "react";
import { sendContactEmailAction } from "@/actions/contact-actions";
import LandingHeader from "@/components/headers/landing-header/landing-header";
import classes from "./contact-us-section.module.scss";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  message: string;
}

export default function ContactUsSection() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      message: "",
    },
    validate: {
      firstName: (value) => (value.trim().length < 1 ? "First name is required" : null),
      // lastName: (value) => (value.trim().length < 1 ? "Last name is required" : null),
      email: (value) => {
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email format";
        return null;
      },
      contactNumber: (value) => (value.trim().length < 1 ? "Contact number is required" : null),
      message: (value) => (value.trim().length < 1 ? "Message is required" : null),
    },
  });

  const handleSubmit = async (values: FormValues) => {
    startTransition(async () => {
      const result = await sendContactEmailAction(values);

      if (result.success) {
        notifications.show({
          title: "Success!",
          message: "Your message has been sent. We'll get back to you soon.",
          color: "green",
        });
        form.reset();
      } else {
        notifications.show({
          title: "Error",
          message: result.error || "Failed to send message. Please try again.",
          color: "red",
        });
      }
    });
  };

  return (
    <section className={classes.sectionRoot}>
      {/* Background cố định phía sau */}
      <div className={classes.backgroundWrapper}>
        <Image
          src="/building-background.webp"
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
              Whether you are scaling up for a new project or looking for
              ongoing support, our team is committed to delivering skilled
              professionals tailored to your business needs – all while keeping
              costs competitive and timelines tight.
            </p>
            <p className={classes.heroParagraph}>
              Discover the difference that flexible, expert-led staffing
              solutions can make for your organisation. Reach out to discuss
              your needs, request a consultation, or learn more about our
              services.
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
                    <Text className={classes.infoValue}>info@elite-techtalent.com</Text>
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
            <Stack gap={30}>
              <h3 className={classes.formTitle}>Get in touch.</h3>

              <form onSubmit={form.onSubmit(handleSubmit)}>
                <div className={classes.formWrapper}>
                  <Grid gutter="xl">
                    <GridCol span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="First Name"
                        variant="unstyled"
                        classNames={{ input: classes.formInput, label: classes.formLabel }}
                        {...form.getInputProps("firstName")}
                      />
                    </GridCol>
                    <GridCol span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="Last Name"
                        variant="unstyled"
                        classNames={{ input: classes.formInput, label: classes.formLabel }}
                        {...form.getInputProps("lastName")}
                      />
                    </GridCol>
                    <GridCol span={12}>
                      <TextInput
                        label="Email Address"
                        variant="unstyled"
                        type="email"
                        classNames={{ input: classes.formInput, label: classes.formLabel }}
                        {...form.getInputProps("email")}
                      />
                    </GridCol>
                    <GridCol span={12}>
                      <TextInput
                        label="Contact number"
                        variant="unstyled"
                        classNames={{ input: classes.formInput, label: classes.formLabel }}
                        {...form.getInputProps("contactNumber")}
                      />
                    </GridCol>
                    <GridCol span={12}>
                      <Textarea
                        label="Message"
                        variant="unstyled"
                        autosize
                        minRows={1}
                        classNames={{ input: classes.formInput, label: classes.formLabel }}
                        {...form.getInputProps("message")}
                      />
                    </GridCol>
                  </Grid>

                  <Button
                    fullWidth
                    size="xl"
                    className={classes.submitButton}
                    mt={40}
                    type="submit"
                    loading={isPending}
                    disabled={isPending}
                  >
                    SUBMIT
                  </Button>
                </div>
              </form>
            </Stack>
          </GridCol>
        </Grid>
      </Container>
    </section>
  );
}