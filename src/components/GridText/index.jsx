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
          {gridText.map((element) => (
            <Styled.GridElement key={element.title}>
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
  background: P.bool,
  button: Button.propTypes,
};

export default GridText;
