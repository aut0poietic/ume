import { newE2EPage } from '@stencil/core/testing';

describe('ume-spacer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ume-spacer></ume-spacer>');

    const element = await page.find('ume-spacer');
    expect(element).toHaveClass('hydrated');
  });
});
