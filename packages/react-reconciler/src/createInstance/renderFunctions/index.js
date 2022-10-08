
export function rect(ctx) {
  const { props } = this;
  const { style, ...values } = props;
  const { x, y, width, height, fillStyle } = { ...style, ...values };
  if (fillStyle) ctx.fillStyle = fillStyle;
  if (width > 0 && height > 0) ctx.fillRect(x, y, width, height);
}
export const shape = rect;
export function texture(ctx) {
  const { props } = this;
  const { style, ...values } = props;
  const { x, y, width, height, source } = { ...style, ...values };
  if (source) ctx.drawImage(source, x, y, width, height);
}