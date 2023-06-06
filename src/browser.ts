import { createDigest } from './digest';

export const digest = createDigest(crypto.subtle);
