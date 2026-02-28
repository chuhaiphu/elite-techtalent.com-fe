import { Stack, Text, Box, Center, Flex, Container } from '@mantine/core';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import VersusIcon from '@/components/icon/versus.svg';
import classes from './versus-section.module.scss';
import type { ReactNode } from 'react';

const comparisonData: { category: string; left: ReactNode; right: string }[] = [
  {
    category: 'Quality',
    left: 'Rigorous technical screening',
    right: 'Keyword matching',
  },
  {
    category: 'Speed',
    left: (
      <>
        Curated shortlist in <span className="highlight">1–2 weeks</span>
      </>
    ),
    right: 'Long pipelines & back-and-forth',
  },
  {
    category: 'Effort',
    left: 'Fewer interviews, clearer decisions',
    right: 'Heavy internal filtering',
  },
  {
    category: 'Fit',
    left: 'Matched to your stack, seniority, and delivery style',
    right: '"Best available" candidates',
  },
  {
    category: 'Risk',
    left: (
      <>
        Consistent quality bar + <span className="highlight">backup</span> options
      </>
    ),
    right: 'Inconsistent outcomes',
  },
];

export default function VersusSection() {
  return (
    <div className={classes.root}>
      <Stack className={classes.contentContainer}>
        <Stack className={classes.header}>
          <Text className={classes.headerTitle} ta="center">
            Every week a role stays open costs you speed, revenue, and momentum.
          </Text>
          <Text className={classes.headerSubtitle} ta="center">
            Partner with us to hire faster, spend less, and build stronger
            teams—without compromise.
          </Text>
        </Stack>

        <Box className={classes.contentWrap}>
          <Flex
            className={classes.headerRow}
            align="center"
            justify="center"
            mb="lg"
          >
            <Text className={classes.brandLeft}>
              Elite Tech <span>Talent</span>
            </Text>
            <Center className={classes.versusIconWrap}>
              <VersusIcon width={64} height={64} aria-label="VS" />
            </Center>
            <Text className={classes.headerRight}>Typical IT HR Solutions</Text>
          </Flex>

          <Container size="lg" className={classes.comparisonContainer}>
            <Stack gap="xl">
              {comparisonData.map((item, index) => (
                <Box key={index} className={classes.comparisonRow}>
                  <Flex
                    className={classes.leftContent}
                    align="center"
                    justify="flex-start"
                    gap={4}
                  >
                    <IoCheckmarkCircleOutline
                      className={classes.checkIcon}
                      size={64}
                    />
                    <Text className={classes.itemLeftText} ta="left">
                      {item.left}
                    </Text>
                  </Flex>
                  <Box className={classes.categoryPill}>
                    <Text className={classes.categoryLabel}>{item.category}</Text>
                  </Box>
                  <Flex
                    className={classes.rightContent}
                    align="center"
                    justify="flex-end"
                  >
                    <Text className={classes.itemRightText} ta="right">
                      {item.right}
                    </Text>
                  </Flex>
                </Box>
              ))}
            </Stack>
          </Container>
        </Box>
      </Stack>
    </div>
  );
}
