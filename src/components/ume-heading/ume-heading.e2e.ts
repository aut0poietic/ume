import { newE2EPage } from '@stencil/core/testing';

describe('ume-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ume-header></ume-header>');

    const element = await page.find('ume-header');
    expect(element).toHaveClass('hydrated');
  });
});
