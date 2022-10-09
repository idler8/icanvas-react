function setStyle(ctx, style) {
  console.log('setStyle', style);
  const { fillStyle, storkeStyle, lineCap, lineJoin, lineWidth, miterLimit, font, textAlign, textBaseline } = style;
  if (fillStyle) ctx.fillStyle = fillStyle;
  if (storkeStyle) ctx.storkeStyle = storkeStyle;
  if (lineCap) ctx.lineCap = lineCap;
  if (lineJoin) ctx.lineJoin = lineJoin;
  if (lineWidth) ctx.lineWidth = lineWidth;
  if (miterLimit) ctx.miterLimit = miterLimit;
  if (font) ctx.font = font;
  if (textAlign) ctx.textAlign = textAlign;
  if (textBaseline) ctx.textBaseline = textBaseline;
}
export function style(ctx) {
  const { props } = this;
  const { style, ...values } = props;
  const styles = { ...style, ...values };
  setStyle(ctx, styles);
}
function getPropsAfterStyle(node, ctx) {
  const { props } = node;
  const { style, ...values } = props;
  if (style) setStyle(ctx, style);
  return { ...values };
}
function getFlexible(value, limit) {
  if (typeof value === 'string' && value.indexOf('%') !== -1) value = (parseFloat(value) || 0) * limit;
  return value;
}
function transformPosition(props, ctx) {
  props.x = props.x ? getFlexible(props.x, ctx.canvas.width) : 0;
  props.y = props.y ? getFlexible(props.y, ctx.canvas.height) : 0;
  return props;
}
export function shape(ctx) {
  const props = getPropsAfterStyle(this, ctx);
  const { x, y, vertices, unClosed, drawType } = transformPosition(props, ctx);
  if (vertices?.length > 0) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    vertices.forEach(function(vertex) {
      ctx.lineTo(vertex.x, vertex.y);
    });
    if (!unClosed) ctx.closePath();
    if (drawType === 'fill') {
      if (!unClosed) ctx.fill();
    } else if (drawType === 'stroke') {
      ctx.stroke();
    } else if (drawType === 'clip') {
      ctx.clip();
    }
  }
}
export function circle(ctx) {
  const props = getPropsAfterStyle(this, ctx);
  const { x, y, radius, unClosed, drawType } = transformPosition(props, ctx);
  if (radius > 0) {
    ctx.beginPath();
    ctx.arc(x, y, radius);
    if (!unClosed) ctx.closePath();
    if (drawType === 'fill') {
      if (!unClosed) ctx.fill();
    } else if (drawType === 'stroke') {
      ctx.stroke();
    } else if (drawType === 'clip') {
      ctx.clip();
    }
  }
}
export function fill(ctx) {
  getPropsAfterStyle(this, ctx);
  ctx.fill();
}
export function stroke(ctx) {
  getPropsAfterStyle(this, ctx);
  ctx.stroke();
}
export function clip(ctx) {
  getPropsAfterStyle(this, ctx);
  ctx.clip();
}
export function rect(ctx) {
  const props = getPropsAfterStyle(this, ctx);
  const { x = 0, y = 0, width, height, drawType } = transformPosition(props, ctx);
  if (width > 0 && height > 0) {
    if (drawType === 'fill') {
      ctx.fillRect(x, y, width, height);
    } else if (drawType === 'stroke') {
      ctx.strokeRect(x, y, width, height);
    } else if (drawType === 'clear') {
      ctx.clearRect(x, y, width, height);
    } else {
      ctx.rect(x, y, width, height);
      if (drawType === 'clip') ctx.clip();
    }
  }
}
export function texture(ctx) {
  const props = getPropsAfterStyle(this, ctx);
  const { x = 0, y = 0, width, height, source } = transformPosition(props, ctx);
  console.log('source?.src', source?.src);
  if (source) ctx.drawImage(source, x, y, width, height);
}