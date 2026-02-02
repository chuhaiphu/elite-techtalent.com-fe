import Image from "next/image";
import { Flex, SimpleGrid } from "@mantine/core";
import classes from "./why-us-flower.module.scss";

const PETALS = [
  { title: "Extensive IT Talent Network", description: "Award-winning HR and IT staffing expertise." },
  {
    title: "500+ prestigious clients", description: "Both domestic and international, delivering exceptional staffing outcomes.",
  },
  { title: "70+ consulting experts", description: "With senior HR and technology leadership backgrounds." },
  { title: "Award-Winning Service", description: "Honored with the Sao Khue Award in IT talent network management." },
] as const;

export default function WhyUsFlower() {
  return (
    <Flex align="center" justify="center">
      <Flex
        align="center"
        justify="center"
        className={classes.flowerContainer}
      >
        <SimpleGrid cols={2} spacing="md" className={classes.petalsGrid}>
          {PETALS.map(({ title, description }, i) => (
            <Flex
              key={title}
              direction="column"
              align="center"
              justify="center"
              className={`${classes.petal} ${classes[["topLeft", "topRight", "bottomLeft", "bottomRight"][i]]}`}
            >
              <span className={classes.petalTitle}>{title}</span>
              <span className={classes.petalDescription}>{description}</span>
            </Flex>
          ))}
        </SimpleGrid>
        <Flex align="center" justify="center" className={classes.centerOvalWrapper}>
          <Flex
            align="center"
            justify="center"
            className={classes.centerOval}
          >
            <Flex direction="column" align="center" className={classes.ovalContent}>
              <span>
                <span className={classes.ovalHighlight}>3000+</span> successful
                transfers of candidates to clients
              </span>
            </Flex>
          </Flex>
          <div className={classes.ovalSlideCard}>
            <div className={classes.ovalSlideCardImageWrap}>
              <Image
                src="/work-desk.webp"
                alt="Work desk"
                fill
                className={classes.ovalSlideCardImage}
                sizes="(max-width: 768px) 180px, 240px"
              />
            </div>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
}
