import { newSpecPage } from '@stencil/core/testing';
import { UmeHeading } from './ume-heading';

describe('ume-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UmeHeading],
      html: `<ume-header></ume-header>`,
    });
    expect(page.root).toEqualHtml(`
      <ume-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ume-header>
    `);
  });
});
