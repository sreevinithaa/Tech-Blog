module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    IsEdual: (data,data2) => {
      // Format date as MM/DD/YYYY
      console.log(data,data2);
      return data==data2;
    }
  };