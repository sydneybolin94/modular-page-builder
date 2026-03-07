import Hero from "./components/Hero";
import TextBlock from "./components/TextBlock";
import FeatureGrid from "./components/FeatureGrid";
import ImageWithText from "./components/ImageWithText";
import CallToAction from "./components/CallToAction";
import Section from "./components/Section";
import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import Button from "./components/button";
import Image from "./components/Image";
import Div from "./components/Div";
import List from "./components/List";

const components = {
  section: Section,
  header: Header,
  paragraph: Paragraph,
  button: Button,
  image: Image,
  hero: Hero,
  textBlock: TextBlock,
  featureGrid: FeatureGrid,
  imageWithText: ImageWithText,
  callToAction: CallToAction,
  div: Div,
  list: List,
};

export default function PageRender({ layout }) {
  const { theme, layout: blocks } = layout;

  const renderBlock = (block, i) => {
    const Component = components[block.type];
    if (!Component) return null;

    return (
      <Component key={i} theme={theme} {...block.props}>
        {block.children?.map(renderBlock)}
      </Component>
    );
  };

  return <>{blocks.map(renderBlock)}</>;
}
