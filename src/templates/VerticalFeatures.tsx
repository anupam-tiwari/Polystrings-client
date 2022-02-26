import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Trusted by 500+ customers"
    description="We believe in quality and trust."
  >
    <VerticalFeatureRow
      title="Competitive Rates"
      description="The best rates than our competitiors."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Mass Production has never been easier"
      description="We value quantity with quality."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Faster Delivery"
      description="All India delivery with pocket friendly rates."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
