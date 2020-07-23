import { newSpecPage } from '@stencil/core/testing';
import { UmeCard } from '../ume-card';

describe('ume-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UmeCard],
      html: `<ume-card></ume-card>`,
    });
    expect(page.root).toEqualHtml(`
      <ume-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ume-card>
    `);
  });
});
