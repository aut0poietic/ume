import { newE2EPage } from '@stencil/core/testing';

describe('ume-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ume-image></ume-image>');

    const element = await page.find('ume-image');
    expect(element).toHaveClass('hydrated');
  });
});
