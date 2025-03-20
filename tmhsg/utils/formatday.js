const moment = require('moment');

export const vnDateTimeFormat = (timeString) => {
  const dateTime = moment(timeString).utcOffset(0); // Đặt múi giờ của bạn

  const formattedTime = dateTime.format('YYYY-MM-DD HH:mm:ss');

  return formattedTime;
};
