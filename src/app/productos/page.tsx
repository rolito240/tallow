import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Productos | OZ Tallow',
  description: 'Descubre nuestros productos premium de tallow natural.',
};

export const dynamic = 'force-dynamic';

import Productos from '@/components/pages/ProductosPage';

export default Productos;
