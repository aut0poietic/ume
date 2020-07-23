import { newSpecPage } from '@stencil/core/testing';
import { UmeSpacer } from '../ume-spacer';

describe('ume-spacer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UmeSpacer],
      html: `<ume-spacer></ume-spacer>`,
    });
    expect(page.root).toEqualHtml(`
      <ume-spacer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ume-spacer>
    `);
  });
});
