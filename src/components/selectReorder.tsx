"use client";

import React from "react";

interface SelectReorderProps {
  setSortBy: (value: string) => void;
  sortBy: string;
}

const SelectReorder: React.FC<SelectReorderProps> = ({ setSortBy, sortBy }) => {
  return (
    <>
      <select
        aria-label="Sort books by"
        className="border rounded-lg bg-[#fdfdfd] p-1 shadow-sm"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option key="reorder" value="">
          Reorder
        </option>
        <option key="newest" value="newest">
          Newest books
        </option>
        <option key="oldest" value="oldest">
          Oldest books
        </option>
        <option key="author" value="author">
          Author (a-z)
        </option>
        <option key="inverted-author" value="inverted-author">
          Author (z-a)
        </option>
        <option key="title" value="title">
          Title (a-z)
        </option>
        <option key="inverted-title" value="inverted-title">
          Title (z-a)
        </option>
      </select>
    </>
  );
};

export default SelectReorder;
