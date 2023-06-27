import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in the `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>{children}</h1>,
    h2: ({ children }) => <h2 style={{ fontWeight: 'bold', fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginTop: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>{children}</h3>,
    p: ({ children }) => <p style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>{children}</p>,
    img: ({ src, alt }) => (
      <img
        src={src}
        alt={alt}
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '0.5rem', textAlign: 'center', marginTop: '1.5rem', marginBottom: '1.5rem', marginLeft: 'auto', marginRight: 'auto' }}
      />
    ),
    ...components,
  };
}
