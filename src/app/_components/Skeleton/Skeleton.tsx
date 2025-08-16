"use client";

/**
 * Simple Skeleton component with 100% width and custom height.
 * Tailwind CSS for styling + inline style for height.
 *
 * Props:
 * - height: number (pixels) | string (CSS value like '40px', '2rem')
 * - className: additional Tailwind classes
 * - rounded: Tailwind rounded class (e.g., 'rounded', 'rounded-md', 'rounded-full')
 */
export default function Skeleton({
  height = "1rem",
  className = "",
  rounded = "rounded-md",
}) {
  const style =
    typeof height === "number" ? { height: `${height}px` } : { height };

  return (
    <div
      aria-busy="true"
      aria-label="Loading content"
      className={`w-full bg-gray-200 dark:bg-gray-700 overflow-hidden ${rounded} animate-pulse ${className}`.trim()}
      style={style}
    />
  );
}
