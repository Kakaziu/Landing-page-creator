import P from 'prop-types';
import SectionBackground from '../SectionBackground';
import * as Styled from './styles';
import Heading from '../Heading';
import Button from '../Button';
import TextComponent from '../TextComponent';

const GridText = ({
  title,
  description,
  gridText = [],
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
          {gridText.map((element, index) => (
            <Styled.GridElement key={index}>
              <Heading size="small">{element.title}</Heading>
              <TextComponent>{element.description}</TextComponent>
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

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  gridText: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ),
  sectionId: P.string,
  background: P.bool,
  ...Button.propTypes,
};

export default GridText;
