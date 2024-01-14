import P from 'prop-types';
import SectionBackground from '../SectionBackground';
import * as Styled from './styles';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

const GridText = ({ title, description, grid = [], background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container background={background}>
        <Styled.TitleContainer>
          <Heading uppercase>{title}</Heading>
          <TextComponent>{description}</TextComponent>
        </Styled.TitleContainer>
        <Styled.GridContainer>
          {grid.map((grid) => (
            <Styled.GridElement key={title}>
              <Heading size="small">{grid.title}</Heading>
              <TextComponent>{grid.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.GridContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ),
  background: P.bool,
};

export default GridText;
