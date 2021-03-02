import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import getDetails from "../InvoiceGeneration/InvoicePDF";
import InvoiceData from "./InvoiceData.json";
import { COLUMNS } from "./TableColumn";
// import "./TableCss.css";
import { TableGlobalFilter } from "./TableGlobalFilter";

const ManageInvoiceTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => InvoiceData, []);

  const tableInstance = useTable(
    {
      //useTable takes in columns, json data and returns an TableInstance
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  //props from TableInstance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalfilter } = state; //globalfilter prop

  const a_style = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <>
      <div>
        <TableGlobalFilter filter={globalfilter} setFilter={setGlobalFilter} />{" "}
        <span>
          <button
            className="btn btn-secondary"
            onClick={previousPage}
            title="previous page"
          >
            Prev
          </button>
          <button
            className="btn btn-secondary"
            style={{ marginLeft: "15px" }}
            onClick={nextPage}
            title="next page"
          >
            Next
          </button>
          <button
            className="btn btn-secondary"
            style={{ marginLeft: "15px" }}
            title="Add a new invoice"
          >
            <a style={a_style} href="/invoice">
              Add Invoice
            </a>
          </button>
        </span>
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? "🔼 "
                        : "🔽 "
                      : "↕ "}
                  </span>
                </th>
              ))}
              <th></th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  console.log(cell);
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                <td>
                  <button
                    style={{ border: `none` }}
                    onClick={() => getDetails()}
                  >
                    :
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ManageInvoiceTable;

// import React from "react";

// const manageInvoice = () => {
//     return <>
//         <input placeholder="filter by name" />
//         <button>Sort</button>

//         <input type="file" />
//     </>
// };

// export default manageInvoice;

// import React, { useEffect, useRef } from "react";

// const FileInput = ({ value, ...rest }) => {
//     console.log(value, rest);
//     const inputRef = useRef();
//     console.log(inputRef);

//     useEffect(() => {
//         console.log(value);
//         if (value === "") {
//             inputRef.current.value = "";
//         } else {
//             inputRef.current.files = value;
//         }
//     }, [value]);

//     return <input {...rest} type="file" ref={inputRef} />;
// };

// export default function ab() {
//     return <FileInput value="" />;
// };
