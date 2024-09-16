"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams?.get("capacity") ?? "all";

  function handleFilter(filter) {
    const Params = new URLSearchParams(searchParams);
    Params.set("capacity", filter);

    router.replace(`${pathname}?${Params.toString()}`, { scroll: false });
  }
  return (
    <div className="flex border border-primary-800">
      <Button
        handleFilter={handleFilter}
        activeFilter={activeFilter}
        filter="all"
      >
        All Cabins
      </Button>

      <Button
        handleFilter={handleFilter}
        activeFilter={activeFilter}
        filter="small"
      >
        1&mdash;2
      </Button>

      <Button
        handleFilter={handleFilter}
        activeFilter={activeFilter}
        filter="medium"
      >
        4&mdash;6
      </Button>

      <Button
        handleFilter={handleFilter}
        activeFilter={activeFilter}
        filter="large"
      >
        8&mdash;10
      </Button>
    </div>
  );
}

function Button({ handleFilter, activeFilter, filter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
