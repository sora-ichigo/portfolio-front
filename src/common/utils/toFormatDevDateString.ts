export const toFormatDevDateString = (date: Date): string => {
  const tmp = date.toDateString().split(" ");
  // e.g.  (4) ['Sun', 'Aug', '01', '2021']
  return tmp[1] + ", " + tmp[3];
};
