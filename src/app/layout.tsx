import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import LoadingScreen from '@/components/LoadingScreen';
import MouseFollower from '@/components/MouseFollower';

export const metadata: Metadata = {
  title: 'Sheri – Patio & Casa | Best Patio & Family Restaurant in Mundhwa, Pune',
  description: 'Sheri – Patio & Casa in Keshav Nagar, Mundhwa is a premium family restaurant and lounge in Pune. Enjoy fine dining, global cuisine, North Indian classics, Italian wood-fired pizza, craft beverages, and live music evenings on our elegant patio.',
  keywords: 'Best restaurant in Mundhwa, Best family restaurant in Pune, Best patio restaurant in Pune, Fine dining in Keshav Nagar, Cocktail bar in Pune, Live music restaurant Pune, Best North Indian restaurant Pune, Italian restaurant Mundhwa, Outdoor dining Pune, Restaurants near Kharadi, Best date night restaurant Pune, Sheri Patio Casa Pune',
  openGraph: {
    title: 'Sheri – Patio & Casa | Best Patio & Family Restaurant in Pune',
    description: 'Enjoy fine dining, global cuisine, wood-fired Italian, craft beverages, and live music on our elegant garden patio in Keshav Nagar, Mundhwa.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://sheripune.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === 'development' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  const originalError = console.error;
                  console.error = function(...args) {
                    if (args[0] && typeof args[0] === 'string' && (
                      args[0].indexOf('Hydration') !== -1 || 
                      args[0].indexOf('hydration') !== -1 || 
                      args[0].indexOf('bis_skin_checked') !== -1
                    )) {
                      return;
                    }
                    originalError.apply(console, args);
                  };
                })();
              `
            }}
          />
        )}
      </head>
      <body className="bg-bgDark text-white min-h-screen" suppressHydrationWarning>
        <LoadingScreen />
        <MouseFollower />
        <SmoothScroll>
          <div className="flex flex-col min-h-screen relative">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
