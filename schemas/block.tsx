import { PropsWithChildren } from "react";
import { styled } from "styled-components";

const PoemComponent = styled.pre`
  font-style: italic;
  text-align: center;
  padding: 0;
  margin: 0;
`;

const SubscriptComponent = styled.sub`
  display: flex;
  justify-content: end;
`;

const QuoteComponent = styled.q`
  quotes: auto;
  font-style: italic;
`;

export default {
  type: "block",
  // Only allow these block styles
  styles: [
    { title: "Normal", value: "normal" },
    { title: "Heading 1", value: "h1" },
    { title: "Heading 2", value: "h2" },
    { title: "Heading 3", value: "h3" },
    { title: "Heading 4", value: "h4" },
    { title: "Heading 5", value: "h5" },
    { title: "Heading 6", value: "h6" },
    {
      title: "Quote",
      value: "blockquote",
      component: (props: PropsWithChildren) => (
        <QuoteComponent lang="en">{props.children}</QuoteComponent>
      ),
    },
    {
      title: "Subscript",
      value: "sub",
      component: (props: PropsWithChildren) => (
        <SubscriptComponent>— {props.children}</SubscriptComponent>
      ),
    },
    {
      title: "Poem",
      value: "pre",
      component: (props: PropsWithChildren) => (
        <PoemComponent>{props.children}</PoemComponent>
      ),
    },
  ],
};
