import P from 'prop-types';
import SectionBackground from '../SectionBackground';
import * as Styled from './styles';
import Heading from '../Heading';
import Button from '../Button';
import TextComponent from '../TextComponent';

const GridImage = ({
  title,
  description,
  gridImage = [],
  background = false,
  sectionId = '',
  button,
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container background={+background} id={sectionId}>
        <Styled.TitleContainer>
          <Heading uppercase>{title}</Heading>
          <TextComponent>{description}</TextComponent>
        </Styled.TitleContainer>
        <Styled.GridContainer>
          {gridImage.map((element) => (
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
  gridImage: P.arrayOf(
    P.shape({
      srcImg: P.string.isRequired,
      altText: P.string.isRequired,
    }),
  ),
  sectionId: P.string,
  background: P.bool,
  ...Button.propTypes,
};

export default GridImage;
