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
import { IoMail, IoCall, IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import classes from "./contact-us-form-section.module.scss";

export default function ContactUsFormSection() {
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
        {/* Toàn bộ Grid nằm trên background với opacity */}
        <Grid className={classes.gridMain} gutter={0}>
          
          {/* Cột bên trái: Thông tin (Nền trắng mờ) */}
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

          {/* Cột bên phải: Form (Nền xanh mờ) */}
          <GridCol span={{ base: 12, md: 7.5 }} className={classes.rightColumn}>
            <Stack gap={30}>
              <h3 className={classes.formTitle}>Get in touch.</h3>

              <div className={classes.formWrapper}>
                <Grid gutter="xl">
                  <GridCol span={{ base: 12, sm: 6 }}>
                    <TextInput 
                      label="First Name" 
                      variant="unstyled" 
                      classNames={{ input: classes.formInput, label: classes.formLabel }} 
                    />
                  </GridCol>
                  <GridCol span={{ base: 12, sm: 6 }}>
                    <TextInput 
                      label="Last Name" 
                      variant="unstyled" 
                      classNames={{ input: classes.formInput, label: classes.formLabel }} 
                    />
                  </GridCol>
                  <GridCol span={12}>
                    <TextInput 
                      label="Email Address" 
                      variant="unstyled" 
                      classNames={{ input: classes.formInput, label: classes.formLabel }} 
                    />
                  </GridCol>
                  <GridCol span={12}>
                    <TextInput 
                      label="Contact number" 
                      variant="unstyled" 
                      classNames={{ input: classes.formInput, label: classes.formLabel }} 
                    />
                  </GridCol>
                  <GridCol span={12}>
                    <Textarea 
                      label="Message" 
                      variant="unstyled" 
                      autosize
                      minRows={1}
                      classNames={{ input: classes.formInput, label: classes.formLabel }} 
                    />
                  </GridCol>
                </Grid>

                <Button fullWidth size="xl" className={classes.submitButton} mt={40}>
                  SUBMIT
                </Button>
              </div>
            </Stack>
          </GridCol>
        </Grid>
      </Container>
    </section>
  );
}