const MIN = 200;
const MAX = 500;

// PUBLIC_INTERFACE
export function delay(ms) {
  /** Wait for specified ms; if undefined uses a random value between 200-500ms. */
  const wait = typeof ms === 'number' ? ms : Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  return new Promise(resolve => setTimeout(resolve, wait));
}
