import { newE2EPage } from '@stencil/core/testing';

describe('ume-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ume-card></ume-card>');

    const element = await page.find('ume-card');
    expect(element).toHaveClass('hydrated');
  });
});
