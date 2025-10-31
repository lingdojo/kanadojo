// Declaraciones de tipo para importaciones de CSS y otros módulos
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '@fortawesome/fontawesome-svg-core/styles.css';
