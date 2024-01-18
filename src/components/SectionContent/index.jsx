import P from 'prop-types';
import SectionBackground from '../SectionBackground';
import * as Styled from './styles';
import Heading from '../Heading';

const SectionContent = ({ title, html, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container background={background}>
        <Styled.TitleContainer>
          <Heading uppercase>{title}</Heading>
        </Styled.TitleContainer>
        <Styled.HtmlContainer dangerouslySetInnerHTML={{ __html: html }} />
      </Styled.Container>
    </SectionBackground>
  );
};

SectionContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};

export default SectionContent;
