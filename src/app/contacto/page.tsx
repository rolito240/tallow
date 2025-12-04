import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | OZ Tallow',
  description: 'Ponte en contacto con nosotros para cualquier pregunta sobre nuestros productos.',
};

export const dynamic = 'force-dynamic';

import Contacto from '@/components/pages/ContactoPage';

export default Contacto;
