export default function serialiseQuery(obj: {
  [key: string]: string | number | string[] | number[];
}) {
  const arr: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      value.forEach((v, index) => arr.push(`${key}[${index}]=${v}`));
    } else {
      arr.push(`${key}=${value}`);
    }
  }
  const result = "?" + arr.join("&");
  return result;
}
