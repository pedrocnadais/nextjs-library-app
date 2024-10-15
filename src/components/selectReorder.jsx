"use client";
import React from "react";
var SelectReorder = function (_a) {
    var setSortBy = _a.setSortBy, sortBy = _a.sortBy;
    return (<>
      <select className="border rounded-lg bg-gray-200 p-1 shadow-sm" value={sortBy} onChange={function (e) { return setSortBy(e.target.value); }}>
        <option key="reorder" value="">
          Reorder
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
    </>);
};
export default SelectReorder;
