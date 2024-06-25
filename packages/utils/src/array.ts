export function includes<T extends U, U>(arr: readonly T[], el: U): el is T {
  return arr.includes(el as T);
}

export const getRandomFromArray = (length: number) => Math.floor(Math.random() * length);
