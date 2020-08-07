function appendElipsisIfRequired(text: string, maxLenght: number) {
  return text.length > maxLenght ? text.slice(0, 10) + '...' : text;
}

export { appendElipsisIfRequired };
