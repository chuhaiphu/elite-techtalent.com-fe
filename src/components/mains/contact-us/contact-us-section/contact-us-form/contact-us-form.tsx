'use client';

import { Button, Grid, GridCol, Stack, TextInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useTransition } from 'react';
import { sendContactEmailAction } from '@/actions/contact-actions';
import classes from './contact-us-form.module.scss';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  message: string;
}

export default function ContactUsForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      message: '',
    },
    validate: {
      firstName: (value) =>
        value.trim().length < 1 ? 'First name is required' : null,
      // lastName: (value) => (value.trim().length < 1 ? "Last name is required" : null),
      email: (value) => {
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return 'Invalid email format';
        return null;
      },
      contactNumber: (value) =>
        value.trim().length < 1 ? 'Contact number is required' : null,
      message: (value) => (value.trim().length < 1 ? 'Message is required' : null),
    },
  });

  const handleSubmit = async (values: FormValues) => {
    startTransition(async () => {
      const result = await sendContactEmailAction(values);

      if (result.success) {
        notifications.show({
          title: 'Success!',
          message: "Your message has been sent. We'll get back to you soon.",
          color: 'green',
        });
        form.reset();
      } else {
        notifications.show({
          title: 'Error',
          message: result.error || 'Failed to send message. Please try again.',
          color: 'red',
        });
      }
    });
  };

  return (
    <Stack gap={30}>
      <h3 className={classes.formTitle}>Get in touch.</h3>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Grid gutter="xl">
          <GridCol span={{ base: 12, sm: 6 }}>
            <TextInput
              label="First Name"
              variant="unstyled"
              classNames={{ input: classes.formInput, label: classes.formLabel }}
              {...form.getInputProps('firstName')}
            />
          </GridCol>
          <GridCol span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Last Name"
              variant="unstyled"
              classNames={{ input: classes.formInput, label: classes.formLabel }}
              {...form.getInputProps('lastName')}
            />
          </GridCol>
          <GridCol span={12}>
            <TextInput
              label="Email Address"
              variant="unstyled"
              type="email"
              classNames={{ input: classes.formInput, label: classes.formLabel }}
              {...form.getInputProps('email')}
            />
          </GridCol>
          <GridCol span={12}>
            <TextInput
              label="Contact number"
              variant="unstyled"
              classNames={{ input: classes.formInput, label: classes.formLabel }}
              {...form.getInputProps('contactNumber')}
            />
          </GridCol>
          <GridCol span={12}>
            <Textarea
              label="Message"
              variant="unstyled"
              autosize
              minRows={1}
              classNames={{ input: classes.formInput, label: classes.formLabel }}
              {...form.getInputProps('message')}
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
      </form>
    </Stack>
  );
}
