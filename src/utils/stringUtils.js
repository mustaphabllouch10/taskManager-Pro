/**
 * Get initials from a name (e.g. "John Doe" -> "JD").
 * Fallback "?" for empty/undefined.
 */
export function getInitials(name) {
  return (name || '?')
    .split(/\s+/)
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .toUpperCase() || '?';
}
