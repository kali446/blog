import React from "react";
import Tip from "./Tip";
import Tableofcontents from "./Tableofcontents";
import Player from "./Player";
import Code from "./Code";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  data: any;
}

const Heading2 = ({ children }: any) => {
  const idText = children.replace(/ /g, "-").toLowerCase();

  return <h2 id={idText}>{children}</h2>;
};

const Heading3 = ({ children }: any) => {
  const idText = children.replace(/ /g, "-").toLowerCase();

  return <h3 id={idText}>{children}</h3>;
};

const Heading4 = ({ children }: any) => {
  const idText = children.replace(/ /g, "-").toLowerCase();

  return <h4 id={idText}>{children}</h4>;
};

const Heading5 = ({ children }: any) => {
  const idText = children.replace(/ /g, "-").toLowerCase();

  return <h5 id={idText}>{children}</h5>;
};

const Content = ({ data }: Props) => {
  return (
    <div id="markdownContent" className="markdownContent">
      <MDXRemote
        source={data}
        components={{
          h2: (props) => <Heading2 {...props} />,
          h3: (props) => <Heading3 {...props} />,
          h4: (props) => <Heading4 {...props} />,
          h5: (props) => <Heading5 {...props} />,
          Tableofcontents,
          Tip,
          Player,
          pre: (props) => <Code {...props} />,
        }}
        options={{
          mdxOptions: {},
        }}
      />
    </div>
  );
};

export default Content;
