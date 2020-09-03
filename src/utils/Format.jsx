export const dateFormat = (date) => {
  const formatDate = new Date(date).toLocaleString().slice(0, 8);
    return formatDate;
};
