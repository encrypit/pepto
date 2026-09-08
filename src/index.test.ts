import { digest } from './index';

describe('digest', () => {
  it.each(['SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'] as const)(
    'hashes message with algorithm "%s"',
    async (algorithm) => {
      expect(await digest(algorithm, '')).toMatchSnapshot();
    },
  );

  it('hashes "Hello, World!"', async () => {
    expect(await digest('SHA-256', 'Hello, World!')).toBe(
      'dffd6021bb2bd5b0af676290809ec3a53191dd81c7f70a4b28688a362182986f',
    );
  });
});
