const formatDate = dateStr => {
  const splitDate = dateStr.split("-");
  return `${splitDate[1]}/${splitDate[2]}/${splitDate[0]}`;
};

export { formatDate };
