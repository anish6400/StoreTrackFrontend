import { decode } from "jsonwebtoken";

export function TokenValid(token) {
  if (!token) return false;
  const { exp } = decode(token);
  if (Date.now() > exp * 1000) return false;
  return true;
}
