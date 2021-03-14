import React, { useMemo, useEffect, useState } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";

import getDetails from "../InvoiceGeneration/InvoicePDF";
import { COLUMNS } from "./TableColumn";
import { TableGlobalFilter } from "./TableGlobalFilter";
import firebaseDB from "../../containers/Firebase";
import Sort from "@material-ui/icons/Sort";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FilterListIcon from "@material-ui/icons/FilterList";
import "./InvoiceManagement.css";

const ManageInvoiceTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const [data, setData] = useState([]);
  useEffect(() => {
    firebaseDB
      .ref("Users/uid1")
      .child("invoice")
      .on("value", function (snapshot) {
        let json = snapshot.val();
        let keys = Object.keys(json);
        let vals = Object.values(json);
        for (let i = 0; i < keys.length; i++) {
          vals[i].id = keys[i];
        }
        console.log(vals);
        setData(vals);
      });
  }, []);

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
  function getPDFDetails() {
    console.log("Inside Get Details");
  }
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Invoice</h3>
      <div className="search_bar" style={{ float: "right" }}>
        <TableGlobalFilter filter={globalfilter} setFilter={setGlobalFilter} />
        <Sort className="icons" />
        {"    "}
        <i class="fas fa-filter"></i>
        {"    "}
        <AddCircleOutlineIcon className="icons" /> {"    "}
        <span></span>
      </div>

      <table {...getTableProps()} className="invoice_table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr className="table_tr" {...headerGroup.getHeaderGroupProps()}>
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
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                <td>
                  <button  className='threeDots' style={{ border: `none` }}>
                    <MoreVertIcon  onClick={() => getPDFDetails()} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageInvoiceTable;
