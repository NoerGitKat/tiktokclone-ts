import { GoogleOAuthProvider } from '@react-oauth/google';
import type { AppProps } from 'next/app';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/sidebar';
import { useSSR } from '../hooks';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { isSSR } = useSSR();

  if (isSSR) return null;

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''}>
      <Navbar />
      <main className="flex gap-6 md:gap-20">
        <Sidebar />
        <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
          <Component {...pageProps} />
        </div>
      </main>
    </GoogleOAuthProvider>
  );
}

export default MyApp;
