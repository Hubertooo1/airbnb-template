/** True when a value is still an unfilled [PLACEHOLDER]. */
export function isPlaceholder(value: string): boolean {
  return /\[[^\]]+\]/.test(value);
}

/** Builds a tel: link from a phone number; returns null when there is no real number yet. */
export function telHref(phone: string): string | null {
  if (isPlaceholder(phone)) return null;
  const cleaned = phone.replace(/[^\d+]/g, "");
  return cleaned.replace(/\+/g, "").length >= 3 ? `tel:${cleaned}` : null;
}

/** Google Maps search link for an address or place name. */
export function mapsHref(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
