import P from 'prop-types';
import * as Styled from './styles';
import SectionBackground from '../SectionBackground/';
import Heading from '../Heading';
import TextComponent from '../TextComponent';
import Button from '../Button';

const SectionTwoColumns = ({
  title,
  description,
  srcImg,
  background = false,
  sectionId = '',
  button,
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container background={+background} id={sectionId}>
        <Styled.TextContainer>
          <Heading uppercase>{title}</Heading>
          <TextComponent>{description}</TextComponent>
          {button.children && (
            <Button url={button.urlButton} size={button.size}>
              {button.children}
            </Button>
          )}
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

SectionTwoColumns.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
  button: Button.propTypes,
};

export default SectionTwoColumns;
