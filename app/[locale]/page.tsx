import { NextPage } from 'next';

import { ModeToggle } from '@/components/ModeToggle';
import { getTranslations } from '@/translations';

interface PageHomeProps {
  params: {
    locale: string;
  };
}

const PageHome: NextPage<PageHomeProps> = async (args) => {
  const { params } = args;
  const { locale } = params;
  const t = await getTranslations(locale);

  return (
    <main className="container mx-auto px-4">
      <h1>{t.pageHome.title}</h1>
      <ModeToggle />
    </main>
  );
};

export default PageHome;
