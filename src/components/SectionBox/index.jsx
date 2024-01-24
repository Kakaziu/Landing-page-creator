import P from 'prop-types';
import * as Styled from './styles';
import SectionBackground from '../SectionBackground/index';
import Heading from '../Heading/index';
import TextComponent from '../TextComponent/index';
import Button from '../Button/index';

const SectionBox = ({ background, title, paragraphs = [], button = null }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading isdark={!background}>{title}</Heading>
        {paragraphs.map((paragraph, index) => (
          <TextComponent key={index}>{paragraph.text}</TextComponent>
        ))}
        {button && (
          <Button url={button.urlButton} size={button.size}>
            {button.textButton}
          </Button>
        )}
      </Styled.Container>
    </SectionBackground>
  );
};

SectionBox.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  paragraphs: P.arrayOf(
    P.shape({
      text: P.string.isRequired,
    }),
  ),
  button:
    P.shape({
      text: P.string.isRequired,
      url: P.string.isRequired,
      size: P.oneOf(['small', 'big']),
    }) | null,
};

export default SectionBox;
