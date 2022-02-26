import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="What are you waiting for."
      subtitle="Redeem your Free Delivery."
      button={
        <Link href="https://forms.gle/EaJ55ApWe9zYG5nPA">
          <a>
            <Button>Get Started</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
