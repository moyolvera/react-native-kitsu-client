function appendElipsisIfRequired(text: string, maxLenght: number) {
  return text.length > maxLenght ? text.slice(0, 10) + '...' : text;
}

function timeStampIsOneWeekOld(timestamp: number) {
  const oneWeek = 7 * 60 * 60 * 24 * 1000;
  return Date.now() > new Date(timestamp + oneWeek).getTime();
}

export { appendElipsisIfRequired, timeStampIsOneWeekOld };
