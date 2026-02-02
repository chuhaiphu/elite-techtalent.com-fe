import { Box, Text } from '@mantine/core';
import classes from './we-offer-branch.module.scss';

const SERVICES = [
  { id: '01', label: 'Permanent Placements' },
  { id: '02', label: 'Contract Staffing' },
  { id: '03', label: 'Project-based teams' },
  { id: '04', label: 'Executive Search' },
  { id: '05', label: 'Remote Talent Solutions' },
];

export function WeOfferBranch() {
  return (
    <Box className={classes.root}>
      <Box className={classes.circle}>
        <Text ta="center" className={classes.circleText}>
          We offer
        </Text>
      </Box>
      <Box className={classes.itemsWrapper}>
        {SERVICES.map((item) => (
          <div key={item.id} className={classes.itemRow}>
            <Box className={classes.capsule}>
              <Text size="sm" className={classes.capsuleText}>
                <span>{item.id}</span>
                {item.label}
              </Text>
            </Box>
          </div>
        ))}
      </Box>
    </Box>
  );
}
