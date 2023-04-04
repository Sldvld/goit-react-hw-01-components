export function getColor() {
  const r = Math.floor(Math.random() * 128) + 128;
  const g = Math.floor(Math.random() * 128) + 128;
  const b = Math.floor(Math.random() * 128) + 128;

  const color = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  return color;
}
