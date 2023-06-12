import type { webcrypto } from 'crypto';

/**
 * Creates a digest function.
 *
 * @param subtle - SubtleCrypto interface of Web Crypto API.
 * @returns - Digest function.
 */
export function createDigest(subtle: webcrypto.SubtleCrypto) {
  return async function digest(
    algorithm: 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512',
    message: string
  ): Promise<string> {
    const data = new TextEncoder().encode(message);
    const hashBuffer = await subtle.digest(algorithm, data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  };
}
