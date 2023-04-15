const randomValue = (size: number) => {
  let result = "";
  for (let i = 0; i < size; i++) {
    result += Math.floor(Math.random() * 16).toString(16);
  }
  return result;
};

export function generateUUIDv4(): string {
  const version = 4;
  const variant = 8;

  const parts = [
    randomValue(8),
    randomValue(4),
    version.toString(16) + randomValue(3),
    (variant.toString(16) + randomValue(3)).substring(0, 4),
    randomValue(12),
  ];

  return parts.join("-");
}
