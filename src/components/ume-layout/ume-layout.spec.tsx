import { newSpecPage } from '@stencil/core/testing';
import { UmeLayout } from './ume-layout';

describe('ume-layout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UmeLayout],
      html: `<ume-layout></ume-layout>`,
    });
    expect(page.root).toEqualHtml(`
      <ume-layout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ume-layout>
    `);
  });
});
