import { NextPage } from 'next';
import { useTranslations } from 'next-intl';

import { ModeToggle } from '@/components/ModeToggle';

const PageHome: NextPage<> = () => {
  const t = useTranslations('pageHome');

  return (
    <main className="container mx-auto px-4">
      <h1>{t('title')}</h1>
      <ModeToggle />
    </main>
  );
};

export default PageHome;
