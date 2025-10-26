import type { webcrypto } from 'crypto';

import { createDigest } from './digest';

export const digest = createDigest(crypto.subtle as webcrypto.SubtleCrypto);
