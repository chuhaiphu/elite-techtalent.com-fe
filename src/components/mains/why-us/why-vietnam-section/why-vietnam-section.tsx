"use client";

import { Fragment, ReactNode } from "react";
import Image from "next/image";
import { Container, Grid, GridCol, Stack, Text } from "@mantine/core";
import classes from "./why-vietnam-section.module.scss";

// Chỉ giữ lại các subtitle items
const ROWS: { label: string; content: ReactNode }[] = [
  {
    label: "Strong Tech Talent Pool",
    content: (
      <>
        Vietnam boasts a rapidly growing tech workforce, with over{" "}
        <span className={classes.highlight}>400,000 IT professionals</span> and{" "}
        <span className={classes.highlight}>more than 50,000</span> new tech graduates each year,
        making it a prime location for skilled IT professionals.
      </>
    ),
  },
  {
    label: "Cost Effective",
    content: (
      <>
        Hiring staff in Vietnam can lead to{" "}
        <span className={classes.highlight}>significant cost savings</span>. Lower labour and living
        costs and competitive salary expectations.
      </>
    ),
  },
  {
    label: "Cultural Compatibility",
    content: (
      <>
        The Vietnamese workforce is{" "}
        <span className={classes.highlight}>highly proficient in English</span>, facilitating
        seamless collaboration with international clients and remote teams.
      </>
    ),
  },
  {
    label: "Supportive Regulatory Environment",
    content: (
      <>
        Vietnam&apos;s Government has implemented incentives and investments to support the tech
        industry, creating a favourable environment for{" "}
        <span className={classes.highlight}>global tech collaboration</span>.
      </>
    ),
  }
];

const QUOTES = [
  {
    quote: "Vietnam is evolving from software outsourcing hub to high-tech manufacturing and regional data centre hub.",
    author: "Reuters & Nikkei Asia",
  },
  {
    quote: "Cloud computing and AI to become core national industries.",
    author: "World Bank – Vietnam Economic Update 2025",
  },
  {
    quote: "Vietnam ICT is the fastest growing market in the region. Organisations solving workforce capability first, will own competitive advantage by 2030.",
    author: "Deloitte – Talent Trends 2030",
  },
];

export default function WhyVietnamSection() {
  return (
    <div className={classes.root}>
      <div className={classes.backgroundStack}>
        <div className={classes.baseBackground}>
          <Image
            src="/city-background.webp"
            alt="City background"
            fill
            className={classes.backgroundImage}
          />
        </div>
      </div>

      <div className={classes.contentLayer}>
        <Container size="xl" className={classes.contentContainer}>
          <Stack gap="xl">
            <div className={classes.titleWrapper}>
              <Text className={classes.title}>Why Vietnam?</Text>
            </div>
            <Stack gap="xs" className={classes.quotesStack}>
              {QUOTES.map((q, i) => (
                <Stack key={i} gap="xs" className={classes.quoteCard}>
                  <Text className={classes.quoteText}>&ldquo;{q.quote}&rdquo;</Text>
                  <Text className={classes.quoteAuthor}>— {q.author}</Text>
                </Stack>
              ))}
            </Stack>
            <Grid className={classes.grid} gutter="lg" columns={12} align="center">
              {ROWS.map((row, i) => (
                <Fragment key={i}>
                  <GridCol span={{ base: 5, md: 4 }} className={classes.cellLeft}>
                    <Text className={classes.subtitle}>{row.label}</Text>
                  </GridCol>
                  <GridCol span={{ base: 7, md: 8 }} className={classes.cellRight}>
                    <div className={classes.contentWrap}>
                      <Text className={classes.subtitleContent}>
                        {row.content}
                      </Text>
                    </div>
                  </GridCol>
                </Fragment>
              ))}
            </Grid>
          </Stack>
        </Container>
      </div>
    </div>
  );
}