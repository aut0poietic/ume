import { newE2EPage } from '@stencil/core/testing';

describe('ume-col', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ume-col></ume-col>');

    const element = await page.find('ume-col');
    expect(element).toHaveClass('hydrated');
  });
});
