import { Grid, GridCol, Stack, Text, Box, Center, ThemeIcon, Flex } from "@mantine/core";
import { IoCheckmark } from "react-icons/io5";
import VersusIcon from "@/components/icon/versus.svg";
import classes from "./why-us-versus-section.module.scss";

const comparisonData = [
  {
    category: "Quality",
    left: "Rigorous technical screening",
    right: "Keyword matching",
  },
  {
    category: "Speed",
    left: "Curated shortlist in 1–2 weeks",
    right: "Long pipelines & back-and-forth",
  },
  {
    category: "Effort",
    left: "Fewer interviews, clearer decisions",
    right: "Heavy internal filtering",
  },
  {
    category: "Fit",
    left: "Matched to your stack, seniority, and delivery style",
    right: '"Best available" candidates',
  },
  {
    category: "Risk",
    left: "Consistent quality bar + backup options",
    right: "Inconsistent outcomes",
  },
];

export default function WhyUsVersusSection() {
  return (
    <Stack className={classes.root}>
      <Stack className={classes.header}>
        <Text className={classes.headerTitle} ta="center">
          Every week a role stays open costs you speed, revenue, and momentum.
        </Text>
        <Text className={classes.headerSubtitle} ta="center">
          Partner with us to hire faster, spend less, and build stronger teams—without compromise.
        </Text>
      </Stack>

      <Box className={classes.contentWrap}>
        <Grid columns={12} mb="lg" align="center">
          <GridCol span={5}>
            <Text className={classes.brandLeft}>
              Elite Tech <span>Talent</span>
            </Text>
          </GridCol>
          <GridCol span={2}>
            <Center className={classes.versusIconWrap}>
              <VersusIcon width={64} height={64} aria-label="VS" />
            </Center>
          </GridCol>
          <GridCol span={5}>
            <Text className={classes.headerRight}>Typical IT HR Solutions</Text>
          </GridCol>
        </Grid>

        <Stack gap="sm">
          {comparisonData.map((item, index) => (
            <Grid key={index} columns={12} align="center">
              <GridCol span={5}>
                <Flex align="center" justify="flex-end" gap="0.5rem">
                  <Text className={classes.itemLeftText} ta="right">{item.left}</Text>
                  <ThemeIcon className={classes.checkIcon} size={24} radius="xl" variant="outline" color="blue">
                    <IoCheckmark size={14} />
                  </ThemeIcon>
                </Flex>
              </GridCol>
              <GridCol span={2}>
                <Center>
                  <Box className={classes.categoryPill}>
                    <Text className={classes.categoryLabel}>{item.category}</Text>
                  </Box>
                </Center>
              </GridCol>
              <GridCol span={5}>
                <Text className={classes.itemRightText} ta="left" c="dimmed">
                  {item.right}
                </Text>
              </GridCol>
            </Grid>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
