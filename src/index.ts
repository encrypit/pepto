import { subtle } from 'crypto';

import { createDigest } from './digest';

/**
 * Generates a hex string digest from a given message.
 *
 * @see {@link https://developer.mozilla.org/docs/Web/API/SubtleCrypto/digest | SubtleCrypto: digest() method}
 *
 * @param algorithm - Hash function ("SHA-1", "SHA-256", "SHA-384", "SHA-512").
 * @param message - Text input.
 * @returns - Digest as a hex string.
 */
export const digest = createDigest(subtle);
