"use client";

import { Fragment } from "react";
import { Container, Grid, GridCol, Text, Badge, Group, Popover, PopoverTarget } from "@mantine/core";
import Image from "next/image";
import classes from "./our-specialties-section.module.scss";

const SPECIALTIES_DATA = [
  {
    category: "Software & Application",
    core: ["Web Dev", "Mobile", "DevOps", "AI", "PM/Product"],
    full: "Front End, Back End, Full-stack, Mobile Developer, DevOps Engineer, Project/Product Manager, AI Engineer, Game Developer, QA Tester",
  },
  {
    category: "IT Operations",
    core: ["System/Network Eng", "IT Support", "DBA", "IT Manager"],
    full: "System Engineer, Network Engineer, IT Support Specialist, IT Auditor, IT Service Desk Analyst, IT Operations Manager, Database Administrator, PC Maintenance",
  },
  {
    category: "Networking & Infrastructure",
    core: ["Cloud Arch/Eng", "Infra Architect", "SysAdmin"],
    full: "IT Director, Infrastructure Architect, Network Architect, Cloud Architecture, Cloud Engineering, Systems Administration, Hardware Management, Systems Reliability",
  },
  {
    category: "Security Analysis",
    core: ["Security Eng", "Pentest", "Vulnerability Analyst"],
    full: "Security Analyst, Security Administration, Security Architecture, Security Engineer, Penetration Tester, Vulnerability Analyst, Secure Application Development",
  },
  {
    category: "Data Analysis & Design",
    core: ["Data Scientist/Eng", "BI Dev", "Data Analyst"],
    full: "Data Analyst, Data Engineer, Data Scientist, Database Development/Administration, BI Development & Deployment, Business Analyst, Data Visualisation",
  },
  {
    category: "Technology Governance",
    core: ["Compliance", "Risk Manager", "IT Auditor", "Solution Arch"],
    full: "Technology Governance Specialist, Information Security Officer, Risk Manager, IT Auditor, Solution Architect, IT Compliance, Data Governance",
  },
];

export default function OurSpecialtiesSection() {
  return (
    <div className={classes.root}>
      <div className={classes.backgroundStack}>
        <div className={classes.baseBackground}>
          <Image
            src="/general-background.webp"
            alt="Background"
            fill
            className={classes.backgroundImage}
            priority
          />
        </div>
      </div>

      <Container size="xl" className={classes.contentContainer}>
        <div className={classes.headerBlock}>
          <h2 className={classes.headerTitle}>Our Specialties</h2>
          <p className={classes.subheaderTitle}>
            Comprehensive IT solutions tailored to your business needs with core expertise.
          </p>
        </div>

        <Grid className={classes.grid} gutter="lg" columns={12} align="center">
          {SPECIALTIES_DATA.map((item, i) => (
            <Fragment key={i}>
              <GridCol span={{ base: 5, md: 4 }} className={classes.cellLeft}>
                <Text className={classes.label}>{item.category}</Text>
              </GridCol>
              <GridCol span={{ base: 7, md: 8 }} className={classes.cellRight}>
                <div className={classes.contentWrap}>
                  <Group gap="xs">
                    {item.core.map((tag) => (
                      <Badge
                        key={tag}
                        variant="light" color="blue" radius="sm"
                        classNames={{
                          label: classes.coreBadgeLabel,
                          root: classes.coreBadgeRoot,
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                    <Popover width={300} position="bottom" withArrow shadow="md" trapFocus>
                      <PopoverTarget>
                        <Text className={classes.moreBadgeText}>
                          + MORE
                        </Text>
                      </PopoverTarget>
                      <Popover.Dropdown p="md">
                        <Text size="sm" style={{ lineHeight: 1.6, color: '#333' }}>
                          {item.full}
                        </Text>
                      </Popover.Dropdown>
                    </Popover>
                  </Group>
                </div>
              </GridCol>
            </Fragment>
          ))}
        </Grid>
      </Container>
    </div>
  );
}