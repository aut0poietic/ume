import { newSpecPage } from '@stencil/core/testing';
import { UmeCol } from './ume-col';

describe('ume-col', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UmeCol],
      html: `<ume-col></ume-col>`,
    });
    expect(page.root).toEqualHtml(`
      <ume-col>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ume-col>
    `);
  });
});
