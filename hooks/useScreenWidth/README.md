# useScreenWidth()

## Description
`useScreenWidth()` is a custom React hook that **tracks the viewport width** and categorizes it into `"small"` or `"wide"`.  
It’s perfect for building responsive components that need to adjust based on screen size.

- ✅ Tracks window width in real-time  
- ✅ Returns `"small"` or `"wide"` based on a configurable breakpoint  
- ✅ Cleans up event listeners automatically  
- ✅ Fully TypeScript-compatible  

---

## Installation
Clone or copy the `useScreenWidth` hook into your project.  
No provider or context is required — it works independently in any component.

---

## Usage

### Basic usage

```tsx
import { useScreenWidth } from "./useScreenWidth";

export default function Navbar() {
  const viewport = useScreenWidth();

  return (
    <nav>
      {viewport === "small" ? (
        <p>Mobile menu</p>
      ) : (
        <p>Full menu</p>
      )}
    </nav>
  );
}
