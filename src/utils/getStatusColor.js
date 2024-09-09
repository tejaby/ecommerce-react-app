export const getStatusColor = (status) => {
  switch (status) {
    case 1:
      return "primary";
    case 2:
      return "error";
    case 3:
      return "primary";
    case 4:
      return "default";
    case 5:
      return "success";
    case 6:
      return "error";
    default:
      return "default";
  }
};
