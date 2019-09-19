import React from "react";

/**
 * Simplifies using multiple React providers by wrapping children with a single
 * component instead of a nested hierarchy.
 *
 * @param providers an array of React components
 * @param children
 * @return {*} a new combined provider component
 */
export default ({ providers, children }) => (
  providers.reduceRight((acc, p) => {
    return React.cloneElement(p, {}, acc);
  }, ...children)
)