import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acerca de | OZ Tallow',
  description: 'Conoce la historia y valores de OZ Tallow.',
};

export const dynamic = 'force-dynamic';

import Acerca from '@/components/pages/AcercaPage';

export default Acerca;
