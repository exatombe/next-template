import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Theme from './Theme';

export const metadata: Metadata = {
  title: 'C2wk - Frontend',
  description: 'C2wk - Frontend of the C2wk project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Theme>
            {children}
          </Theme>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
