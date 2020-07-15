import { newSpecPage } from '@stencil/core/testing';
import { UmeImage } from './ume-image';

describe('ume-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UmeImage],
      html: `<ume-image></ume-image>`,
    });
    expect(page.root).toEqualHtml(`
      <ume-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ume-image>
    `);
  });
});
