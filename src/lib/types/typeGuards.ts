export function isDefined<T>(value: T | nullish): value is T {
  return value != null;
}
