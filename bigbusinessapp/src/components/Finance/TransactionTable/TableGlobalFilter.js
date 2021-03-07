import React from "react";

// this is Filter property on TransactionTable
export const TableGlobalFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <input
        style={{ width: "50vw" }}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};
