
import MantineConfigProviderContainer from "./config-provider-container";

export async function MantineConfigProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  'use cache'
  return (
    <MantineConfigProviderContainer>{children}</MantineConfigProviderContainer>
  )
}