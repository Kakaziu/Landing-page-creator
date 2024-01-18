import { screen } from '@testing-library/react';
import SectionContent from '.';
import mock from './mock';
import renderTheme from '../../styles/render-theme';

describe('<SectionContent/>', () => {
  it('should render SectionContent', () => {
    const { container } = renderTheme(<SectionContent {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render SectionContent with background', () => {
    renderTheme(<SectionContent {...mock} background={true} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
