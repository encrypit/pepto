import { describe, it } from 'node:test';

import assert from 'assert';

import { digest } from '../esm/index.js';

describe('index', () => {
  it('exports "digest" function', () => {
    assert.strictEqual(typeof digest, 'function');
  });

  it('hashes message with algorithm "SHA-1"', async () => {
    assert.strictEqual(
      await digest('SHA-1', ''),
      'da39a3ee5e6b4b0d3255bfef95601890afd80709',
    );
  });

  it('hashes message with algorithm "SHA-256"', async () => {
    assert.strictEqual(
      await digest('SHA-256', ''),
      'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    );
  });

  it('hashes message with algorithm "SHA-384"', async () => {
    assert.strictEqual(
      await digest('SHA-384', ''),
      '38b060a751ac96384cd9327eb1b1e36a21fdb71114be07434c0cc7bf63f6e1da274edebfe76f65fbd51ad2f14898b95b',
    );
  });

  it('hashes message with algorithm "SHA-512"', async () => {
    assert.strictEqual(
      await digest('SHA-384', ''),
      '38b060a751ac96384cd9327eb1b1e36a21fdb71114be07434c0cc7bf63f6e1da274edebfe76f65fbd51ad2f14898b95b',
    );
  });
});
