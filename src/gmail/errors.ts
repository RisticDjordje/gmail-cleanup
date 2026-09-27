export type GmailErrorKind =
  | 'unauthorized'
  | 'insufficient_scope'
  | 'not_found'
  | 'rate_limited'
  | 'invalid_request'
  | 'server'
  | 'network'
  | 'invalid_response';

export class GmailApiError extends Error {
  override readonly name = 'GmailApiError';
  constructor(
    readonly kind: GmailErrorKind,
    message: string,
    readonly status: number | null = null,
    readonly reason: string | null = null,
  ) {
    super(message);
  }
}
