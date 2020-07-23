import { newE2EPage } from '@stencil/core/testing';

describe('ume-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ume-text></ume-text>');

    const element = await page.find('ume-text');
    expect(element).toHaveClass('hydrated');
  });
});
