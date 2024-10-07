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
        className="border rounded-lg bg-gray-200 p-1 shadow-sm"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option key="reorder" value="">
          Reorder
        </option>
        <option key="author" value="author">
          Author (a-z)
        </option>
        <option key="title" value="title">
          Title (a-z)
        </option>
      </select>
    </>
  );
};

export default SelectReorder;
