let lastId: number = 0;

export const newId = (prefix: string = "id") => {
  lastId++;
  const newId: string = `${prefix}${lastId}`;
  return newId;
};
