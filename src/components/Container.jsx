/**
 * Consistent page width & horizontal padding:
 * Mobile (<640) | Tablet (640–1023) | Laptop (1024–1279) | Desktop (1280+)
 */
export default function Container({ children, className = "" }) {
  return (
    <div className={`container-page ${className}`.trim()}>{children}</div>
  );
}
