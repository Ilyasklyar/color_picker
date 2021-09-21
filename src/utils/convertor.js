export const convertorToHex = (colors) => {
  const colorHex = colors.map((i) => {
    return i < 10 ? "0" + Number(i).toString(16) : Number(i).toString(16);
  });
  return `#${colorHex.join("")}`;
};

export const convertorToRgb = (colorhex) => {
  const color = colorhex.toString().split("");
  let red = parseInt(`${color[1]}${color[2]}`, 16);
  let green = parseInt(`${color[3]}${color[4]}`, 16);
  let blue = parseInt(`${color[5]}${color[6]}`, 16);
  return [red, green, blue];
};
