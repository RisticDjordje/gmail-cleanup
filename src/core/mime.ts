import type { MailtoTarget } from './headers';

function toBase64(bytes: Uint8Array): string {
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

const utf8 = (text: string): Uint8Array => new TextEncoder().encode(text);
const stripLineBreaks = (value: string): string => value.replace(/[\r\n]+/g, ' ');

/** RFC 2047 encoded-word for non-ASCII header values. */
function encodeHeader(value: string): string {
  return /^[\x20-\x7e]*$/.test(value) ? value : `=?UTF-8?B?${toBase64(utf8(value))}?=`;
}

/** A base64url RFC 5322 message for Gmail's `messages.send` (`raw` field). */
export function buildRawEmail({ to, subject, body }: MailtoTarget): string {
  const message = [
    `To: ${stripLineBreaks(to)}`,
    `Subject: ${encodeHeader(stripLineBreaks(subject))}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    ...(toBase64(utf8(body)).match(/.{1,76}/g) ?? []), // RFC 2045 line length
  ].join('\r\n');
  return toBase64(utf8(message)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
