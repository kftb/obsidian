module.exports = function (title, slug) {
  const match = title.match(/(\d+)\s*$/);
  const number = Number(match[1]);
  return [`${slug}${number - 1}`, `${slug}${number + 1}`];
};
