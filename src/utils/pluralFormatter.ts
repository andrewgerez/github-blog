export const pluralFormatter = (quantity: number, singular: string, plural: string) => {
  return quantity > 1 
    ? `${quantity} ${plural}` 
    : `${quantity} ${singular}`;
}