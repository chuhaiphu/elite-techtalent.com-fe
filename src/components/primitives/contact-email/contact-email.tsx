import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';

interface ContactEmailProps {
  type: 'recipient' | 'confirmation';
  firstName: string;
  lastName: string;
  email: string;
  contactNumber?: string;
  message: string;
}

export function ContactEmail({
  type,
  firstName,
  lastName,
  email,
  contactNumber,
  message,
}: ContactEmailProps) {
  const logoUrl = 'https://elite-techtalent.com/images/logo-with-text.webp';
  const isRecipient = type === 'recipient';

  return (
    <Html>
      <Head />
      <Preview>
        {isRecipient
          ? `New contact form submission from ${firstName} ${lastName}`
          : 'Thank you for contacting Elite Tech Talent'}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Img src={logoUrl} alt="Elite Tech Talent" width="180" style={logo} />
          </Section>

          {isRecipient ? (
            <>
              <Heading style={heading}>New Contact Form Submission</Heading>
              <Section style={contentSection}>
                <Text style={label}>Name:</Text>
                <Text style={value}>
                  {firstName} {lastName}
                </Text>

                <Text style={label}>Email:</Text>
                <Text style={value}>{email}</Text>

                {contactNumber && (
                  <>
                    <Text style={label}>Contact Number:</Text>
                    <Text style={value}>{contactNumber}</Text>
                  </>
                )}

                <Text style={label}>Message:</Text>
                <Text style={messageText}>{message}</Text>
              </Section>

              <Hr style={divider} />

              <Text style={footer}>
                Submitted on: {new Date().toLocaleString()}
              </Text>
            </>
          ) : (
            <>
              <Heading style={heading}>Thank you for contacting us!</Heading>
              <Section style={contentSection}>
                <Text style={greeting}>
                  Dear {firstName} {lastName},
                </Text>
                <Text style={paragraph}>
                  We have received your message and will get back to you as soon as
                  possible.
                </Text>
                <Text style={label}>Your message:</Text>
                <Text style={messageText}>{message}</Text>
              </Section>

              <Hr style={divider} />

              <Text style={signature}>
                Best regards,
                <br />
                Elite Tech Talent Team
              </Text>
              <Text style={footer}>
                This is an automated confirmation email. Please do not reply to this
                message.
              </Text>
            </>
          )}
        </Container>
      </Body>
    </Html>
  );
}

// Styles - Simple, professional, clean
const main = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '600px',
};

const logoSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
  backgroundColor: 'transparent',
};

const logo = {
  margin: '0 auto',
  backgroundColor: 'transparent',
};

const heading = {
  fontSize: '24px',
  fontWeight: '600',
  color: '#1a1a1a',
  margin: '0 0 24px 0',
  lineHeight: '1.4',
};

const contentSection = {
  marginBottom: '24px',
};

const label = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#666666',
  margin: '16px 0 4px 0',
  lineHeight: '1.5',
};

const value = {
  fontSize: '15px',
  color: '#1a1a1a',
  margin: '0 0 8px 0',
  lineHeight: '1.6',
};

const greeting = {
  fontSize: '15px',
  color: '#1a1a1a',
  margin: '0 0 16px 0',
  lineHeight: '1.6',
};

const paragraph = {
  fontSize: '15px',
  color: '#1a1a1a',
  margin: '0 0 16px 0',
  lineHeight: '1.6',
};

const messageText = {
  fontSize: '15px',
  color: '#1a1a1a',
  margin: '8px 0 0 0',
  padding: '12px',
  backgroundColor: '#f5f5f5',
  borderRadius: '4px',
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap' as const,
};

const divider = {
  borderColor: '#e5e5e5',
  margin: '24px 0',
};

const signature = {
  fontSize: '15px',
  color: '#1a1a1a',
  margin: '0 0 16px 0',
  lineHeight: '1.6',
};

const footer = {
  fontSize: '12px',
  color: '#999999',
  margin: '0',
  lineHeight: '1.5',
};
