function formatDate(dateString: string): string {
  const dateObj = new Date(dateString);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  let monthStr = "";
  switch (month) {
    case 1:
      monthStr = "JAN";
      break;
    case 2:
      monthStr = "FEB";
      break;
    case 3:
      monthStr = "MAR";
      break;
    case 4:
      monthStr = "APR";
      break;
    case 5:
      monthStr = "MAY";
      break;
    case 6:
      monthStr = "JUNE";
      break;
    case 7:
      monthStr = "JULY";
      break;
    case 8:
      monthStr = "AUG";
      break;
    case 9:
      monthStr = "SEPT";
      break;
    case 10:
      monthStr = "OCT";
      break;
    case 11:
      monthStr = "NOV";
      break;
    case 12:
      monthStr = "DEC";
      break;

    default:
      return (monthStr = "Error");
  }
  const formattedDate = `${day} ${monthStr} ${year}`;

  return formattedDate;
}

export default formatDate;