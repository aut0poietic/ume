import { newSpecPage } from '@stencil/core/testing';
import { UmeText } from '../ume-text';

describe('ume-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UmeText],
      html: `<ume-text></ume-text>`,
    });
    expect(page.root).toEqualHtml(`
      <ume-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ume-text>
    `);
  });
});
