import P from 'prop-types';
import SectionBackground from '../SectionBackground';
import * as Styled from './styles';
import Heading from '../Heading';
import Button from '../Button';
import TextComponent from '../TextComponent';

const GridImage = ({
  title,
  description,
  grid = [],
  background = false,
  button,
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container background={+background}>
        <Styled.TitleContainer>
          <Heading uppercase>{title}</Heading>
          <TextComponent>{description}</TextComponent>
        </Styled.TitleContainer>
        <Styled.GridContainer>
          {grid.map((element) => (
            <Styled.GridElement key={element.altText}>
              <img src={element.srcImg} alt={element.altText} />
            </Styled.GridElement>
          ))}
        </Styled.GridContainer>
        {button.children && (
          <Button url={button.urlButton} size={button.size}>
            {button.children}
          </Button>
        )}
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      srcImg: P.string.isRequired,
      altText: P.string.isRequired,
    }),
  ),
  background: P.bool,
  button: Button.propTypes,
};

export default GridImage;
