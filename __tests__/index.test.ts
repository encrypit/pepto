// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { digest } from '../src/index.ts';

describe('digest', () => {
  it.each(['SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'] as const)(
    'hashes message with algorithm %s',
    async (algorithm) => {
      expect(await digest(algorithm, '')).toMatchSnapshot();
    }
  );
});
