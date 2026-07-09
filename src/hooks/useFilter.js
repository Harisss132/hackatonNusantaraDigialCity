import { useState, useMemo } from "react";

export function useFilter(items, filterKey) {
  const [activeFilter, setActiveFilter] = useState("semua");

  const filteredItems = useMemo(() => {
    if (activeFilter === "semua") return items;
    return items.filter((item) => item[filterKey] === activeFilter);
  }, [items, activeFilter, filterKey]);

  return { activeFilter, setActiveFilter, filteredItems };
}