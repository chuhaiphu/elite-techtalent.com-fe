import { Container } from '@mantine/core';
import LandingHeader from '@/components/headers/landing-header/landing-header';
import classes from './layout.module.scss';

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={classes.headerStrip}>
        <Container size="xl">
          <LandingHeader />
        </Container>
      </div>
      <Container size="xl" className={classes.contentArea}>
        {children}
      </Container>
    </>
  );
}
