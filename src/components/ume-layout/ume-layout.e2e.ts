import { newE2EPage } from '@stencil/core/testing';

describe('ume-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ume-layout></ume-layout>');

    const element = await page.find('ume-layout');
    expect(element).toHaveClass('hydrated');
  });
});
