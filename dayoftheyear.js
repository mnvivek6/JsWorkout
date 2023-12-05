var dayOfYear = function (date) {
    let array = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    let splitedDate = date.split('-');
    let year = parseInt(splitedDate[0]);
    let month = parseInt(splitedDate[1]);
    let day = parseInt(splitedDate[2]);
  
    // Check for leap year and update February days
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      array[1] = 29; // Leap year, so February has 29 days
    }
  
    let dayOfYear = day;
    for (let i = 0; i < month - 1; i++) {
      dayOfYear += array[i];
    }
  
    console.log(dayOfYear);
  };
  
  dayOfYear('2019-2-10'); // Output: 10
  