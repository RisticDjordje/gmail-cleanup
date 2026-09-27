export function domainOf(email: string): string {
  const at = email.lastIndexOf('@');
  return at === -1 ? '' : email.slice(at + 1).toLowerCase();
}

// Public suffixes with two labels, so `news.example.co.uk` groups as `example.co.uk`.
// A full Public Suffix List is overkill for grouping mail senders; this covers the common cases.
const TWO_LABEL_SUFFIXES = new Set([
  'co.uk', 'org.uk', 'ac.uk', 'gov.uk', 'me.uk', 'ltd.uk', 'plc.uk',
  'com.au', 'net.au', 'org.au', 'edu.au', 'gov.au',
  'co.nz', 'org.nz', 'co.jp', 'ne.jp', 'or.jp', 'co.kr', 'co.in', 'co.za',
  'com.br', 'com.mx', 'com.ar', 'com.tr', 'com.cn', 'com.hk', 'com.sg', 'com.tw',
  'co.il', 'co.id', 'com.my', 'com.ph', 'com.vn', 'com.ua', 'com.pl',
]); // prettier-ignore

/** Approximate registrable domain: `news.mail.example.co.uk` → `example.co.uk`. */
export function registrableDomain(domain: string): string {
  const labels = domain.toLowerCase().split('.').filter(Boolean);
  if (labels.length <= 2) return labels.join('.');
  const lastTwo = labels.slice(-2).join('.');
  return labels.slice(TWO_LABEL_SUFFIXES.has(lastTwo) ? -3 : -2).join('.');
}

/** `@registrable-domain` key for an address, used for domain grouping and domain-wide "keep". */
export function domainKey(email: string): string {
  return `@${registrableDomain(domainOf(email)) || email}`;
}
