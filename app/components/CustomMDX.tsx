import { MDXRemote } from "next-mdx-remote/rsc";

interface CustomMDXProps {
  components?: Record<string, React.ComponentType<any>>;
  source?: string
}

const components = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 {...props} className="font-bold text-center mb-5 text-2xl" />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 {...props} className="font-bold text-center mb-5 text-xl" />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3 {...props} className="font-bold text-center mb-5 text-lg" />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p {...props} className="mb-5" />
  ),
  a: (props: React.HTMLProps<HTMLAnchorElement>) => (<a {...props} className="text-primary font-bold" />),
  img: (props: React.HTMLProps<HTMLImageElement>) => (
    <img
      {...props}
      className="max-w-full h-auto rounded-lg text-center mb-[1.5rem] mx-auto"
    />
  ),
};

export function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
