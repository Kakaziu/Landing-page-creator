import P from 'prop-types';
import SectionBackground from '../SectionBackground';
import * as Styled from './styles';
import Heading from '../Heading';
import Button from '../Button';

const SectionContent = ({ title, html, background = false, button }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container background={+background}>
        <Styled.TitleContainer>
          <Heading uppercase>{title}</Heading>
        </Styled.TitleContainer>
        <Styled.HtmlContainer dangerouslySetInnerHTML={{ __html: html }} />
        {button && (
          <Button url={button.urlButton} size={button.size}>
            {button.textButton}
          </Button>
        )}
      </Styled.Container>
    </SectionBackground>
  );
};

SectionContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
  button: Button.propTypes,
};

export default SectionContent;
