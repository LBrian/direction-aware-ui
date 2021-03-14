import { render } from '@testing-library/svelte';
import { expect } from 'chai';
import DaCard from './index.svelte';

describe('<DaCard>', () => {
  it('render <DaCard>', () => {
    const { container } = render(DaCard);
    const cardContainer = container.querySelector('article.da-card-container');
    const cardContainerStyle = cardContainer?.getAttribute('style');

    const card = cardContainer?.querySelector('article.da-card') ?? null;
    const cardStyle = card?.getAttribute('style');

    expect(document.body.contains(cardContainer));
    expect(cardContainerStyle).contain('--da-card-color: inherit;');
    expect(cardContainerStyle).contain('--da-card-width:350px;');
    expect(cardContainerStyle).contain('--da-card-perspective:600px;');
    expect(cardContainerStyle).contain('--da-card-avatar-brd-width:1rem;');
    expect(cardContainerStyle).contain('--da-card-avatar-brd-color:#eee;');

    expect(cardContainer?.contains(card));
    expect(card?.classList.contains('top-space'));
    expect(cardStyle).contain('--da-card-bg-color:#fff;');
  });

  it("render <DaCard layout='figure'>", () => {
    const { container } = render(DaCard, { layout: 'figure' });

    const card = container.querySelector('article.da-card');
    const cardBody = container.querySelector('div.da-card-body');

    expect(card?.classList.contains('figure'));
    expect(cardBody?.classList.contains('figure'));
  });
});
