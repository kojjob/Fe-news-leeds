const dateFormat = (date) => {
  const formatDate = new Date(date).toLocaleString();
  return formatDate;
};

module.export = { dateFormat };
