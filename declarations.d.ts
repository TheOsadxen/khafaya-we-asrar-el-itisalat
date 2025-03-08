/**
 * Since TypeScript does not natively support importing non-code assets like .svg files, you need to declare their types manually
 */
declare module "*.svg" {
  const content: string;
  export default content;
}

/**
 * Since TypeScript does not natively support importing non-code assets like .png files, you need to declare their types manually
 */
declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
