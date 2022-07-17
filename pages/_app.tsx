import type { AppProps } from 'next/app';
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/sidebar';
import { useSSR } from '../hooks';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { isSSR } = useSSR();

  if (isSSR) return null;

  return (
    <div>
      <Navbar />
      <div className="flex gap-6 md:gap-20">
        <Sidebar />
        <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
