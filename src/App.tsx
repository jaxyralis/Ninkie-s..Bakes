import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import CakesPage from '@/pages/CakesPage';
import VisitPage from '@/pages/VisitPage';
import { useReveal } from '@/hooks/useReveal';

type Page = 'home' | 'cakes' | 'visit';

function getPage(pathname: string): Page {
  if (pathname.endsWith('/cakes')) return 'cakes';
  if (pathname.endsWith('/visit')) return 'visit';
  return 'home';
}

function App() {
  const [page, setPage] = useState<Page>(() => getPage(window.location.pathname));
  const ref = useReveal<HTMLDivElement>([page]);

  useEffect(() => {
    const handleNavigation = () => {
      setPage(getPage(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  return (
    <div ref={ref} className="min-h-screen bg-cream-50 overflow-x-hidden">
      <Navbar />
      <main>
        {page === 'cakes' && <CakesPage />}
        {page === 'visit' && <VisitPage />}
        {page === 'home' && <HomePage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
