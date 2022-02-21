import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://forms.gle/EaJ55ApWe9zYG5nPA">
            <a target="_blank">Print</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img src="printer.png" width={'750px'} height={'750px'}></img>
    </div>
    <Section yPadding="pt-2 pb-32">
      <HeroOneButton
        title={
          <>
            {'Turn your\n'}
            <span className="text-primary-500">Imagination to Reality</span>
          </>
        }
        description="The easy way to 3D print."
        button={
          <Link href="https://forms.gle/EaJ55ApWe9zYG5nPA">
            <a target="_blank">
              <Button xl>Get Your First Print For Free</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
