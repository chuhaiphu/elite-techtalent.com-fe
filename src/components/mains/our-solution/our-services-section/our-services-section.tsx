"use client";

import type { ReactNode } from "react";
import { Container, Grid, GridCol, Stack } from "@mantine/core";
import Image from "next/image";
import classes from "./our-services-section.module.scss";

const SERVICES: {
  image: string;
  headerContent: ReactNode;
  paragraphContent: ReactNode;
}[] = [
    {
      image: "/look-up-paper.webp",
      headerContent: <h3 className={classes.text}>HEAD HUNTING</h3>,
      paragraphContent: <p className={classes.bodyText}>Providing the right candidates for your team for permanent roles.</p>,
    },
    {
      image: "/three-people-working.webp",
      headerContent: <h3 className={classes.text}>STAFF AUGMENTATION</h3>,
      paragraphContent: <p className={classes.bodyText}>Scalable IT talent for every project stage – rapid deployment of skilled tech professionals, on short or long-term engagements.</p>,
    },
    {
      image: "/four-people-thumb-up.webp",
      headerContent: <h3 className={classes.text}>“BOT”</h3>,
      paragraphContent: (
        <Stack gap={8}>
          <p>
            <span className={classes.bodyHighlight}>Build</span>
            <span className={classes.bodyText}> – we create your highly skilled, long-term commitment, developer team, based overseas.</span>
          </p>
          <p>
            <span className={classes.bodyHighlight}>Operate</span>
            <span className={classes.bodyText}> – we manage the set-up, ensuring legal compliance and local cultural fit.</span>
          </p>
          <p>
            <span className={classes.bodyHighlight}>Transfer</span>
            <span className={classes.bodyText}> – at a pre-determined time, we transfer full responsibility and management of the team to your organisation.</span>
          </p>
        </Stack>
      ),
    },
    {
      image: "/compliance-word-sample.webp",
      headerContent: (
        <>
          <h3 className={classes.text}>&quot;EOR&quot;</h3>
          <h4 className={classes.text}>Employer of Record</h4>
        </>
      ),
      paragraphContent: (
        <p>
          <span className={classes.bodyText}>We act as official employer </span>
          <span className={classes.bodyHighlight}>on your behalf</span>
          <span className={classes.bodyText}>, taking care of all mandatory employment documentation, tax filings, and local legal compliance – you simply manage and direct the team&apos;s day-to-day work. Simply put, you get to build and oversee an offshore team without the need to establish a local entity.</span>
        </p>
      ),
    },
    {
      image: "/two-people-coding.webp",
      headerContent: <h3 className={classes.text}>HR Outsourcing</h3>,
      paragraphContent: (
        <>
          <p>
            <span className={classes.bodyText}>We simplify </span>
            <span className={classes.bodyHighlight}>HR operations</span>
            <span className={classes.bodyText}>, while you focus on your core business.</span>
          </p>
          <ul className={classes.bodyList}>
            <li className={classes.bodyListItem}>End-to-end HR management: contracts, payroll, compliance</li>
            <li className={classes.bodyListItem}>Reduce in house HR workload and legal risks</li>
            <li className={classes.bodyListItem}>Customisable solutions for teams of all sizes</li>
          </ul>
        </>
      ),
    },
  ];

export default function OurServicesSection() {
  return (
    <section className={classes.sectionRoot}>
      <Container size="xl" className={classes.contentContainer}>
        <Stack className={classes.titleStack}>
          <h2 className={classes.sectionTitle}>Our Services</h2>
        </Stack>
        <Grid
          classNames={{
            root: classes.gridRoot,
            col: classes.gridCol,
            inner: classes.gridInner,
          }}
          gutter="lg"
          columns={15}
        >
          {SERVICES.map((item, i) => (
            <GridCol key={i} span={{ base: 15, lg: 3 }}>
              <Stack className={classes.card}>
                <div className={classes.cardImageWrapper}>
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className={classes.headerImage}
                    sizes="(max-width: 1200px) 33vw, (max-width: 768px) 50vw, 20vw"
                  />
                </div>
                <Stack className={classes.cardContent}>
                  <Stack gap="xs" align="center" className={classes.headerContent}>{item.headerContent}</Stack>
                  <div className={classes.cardBody}>{item.paragraphContent}</div>
                </Stack>
              </Stack>
            </GridCol>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
