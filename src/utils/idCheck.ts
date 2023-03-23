const checkId = (id: string) => {
  const checkForHexRegExp = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;
  const validation = checkForHexRegExp.test(id);
  if (!validation) {
    return { type: 'unprocessable', message: { message: 'Invalid mongo id' } };
  }
};

export default checkId;