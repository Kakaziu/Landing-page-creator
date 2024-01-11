import renderTheme from '../../styles/render-theme';
import SectionBox from '.';
import mock from './mock';
import { screen } from '@testing-library/react';

describe('<SectionBox/>', () => {
  it('should render section box', () => {
    const { container } = renderTheme(<SectionBox {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should not render paragraphs', () => {
    renderTheme(<SectionBox />);

    expect(screen.queryAllByText(/there are/i)).toHaveLength(0);
  });

  it('should render all paragraphs', () => {
    renderTheme(<SectionBox {...mock} />);

    expect(screen.getAllByText(/there are/i)).toHaveLength(
      mock.paragraphs.length,
    );
  });

  it('should render button when have button', () => {
    renderTheme(<SectionBox {...mock} />);

    expect(
      screen.getByRole('button', { name: 'Clique aqui' }),
    ).toBeInTheDocument();
  });
});
