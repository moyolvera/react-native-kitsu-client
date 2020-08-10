function appendElipsisIfRequired(text: string, maxLenght: number) {
  return text.length > maxLenght ? text.slice(0, 10) + '...' : text;
}

function stringFormat(text?: string, ...args: string[]) {
  return text ? text.replace(/{(\d+)}/g, (match, index) => args[index] || '').replace(/\|/g, '\n') : '';
}

function timeStampIsOneWeekOld(timestamp: number) {
  const oneWeek = 7 * 60 * 60 * 24 * 1000;
  return Date.now() > new Date(timestamp + oneWeek).getTime();
}

export { appendElipsisIfRequired, stringFormat, timeStampIsOneWeekOld };
