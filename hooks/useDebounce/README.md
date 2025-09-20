# useDebounce()

## Description
`useDebounce()` is a custom React hook that **delays an action until a value stops changing**.  
It’s perfect for minimizing API calls when using search inputs, autocomplete, or any rapidly-changing state.

- ✅ Debounces a value or function over a configurable delay  
- ✅ Helps prevent excessive re-renders or API calls  
- ✅ Simple, lightweight, fully TypeScript-compatible  

---

## Installation
Clone or copy the `useDebounce` hook into your project.  
No provider or context is required — it works independently in any component.

---

## Usage

### Debouncing a value

```tsx
import { useState } from "react";
import { useDebounce } from "./useDebounce";

export default function Search() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500); // 500ms delay

  useEffect(() => {
    if (debouncedQuery) {
      fetch(`/api/search?q=${debouncedQuery}`)
        .then(res => res.json())
        .then(console.log);
    }
  }, [debouncedQuery]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  );
}
