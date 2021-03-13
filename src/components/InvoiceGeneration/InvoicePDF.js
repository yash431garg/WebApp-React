import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function createPdf(receiverDetails, inputs) {
  var doc = new jsPDF();

  var pageSize = doc.internal.pageSize;
  var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

  var finalY = doc.lastAutoTable.finalY || 10;

  var companyName = "Bigbusiness App";

  doc.setFontSize(24);
  doc.text(companyName, pageWidth / 2 - 30, finalY);

  doc.setFontSize(24);
  doc.text("Tax Invoice", pageWidth / 2 - 22, finalY + 20);

  const { name, address, email, mobile, gstin, region } = receiverDetails;

  doc.autoTable({
    theme: "grid",
    startY: finalY + 25,
    head: [
      ["TRANSACTION DETAILS", "SENDER(BILLED TO)", "RECEIVER(SHIPPED TO)"],
    ],
    body: [
      [`Invoice No     : `, `Name    : `, `Name    : ${name}`],
      [`Invoice Date  : `, `Address : `, `Address : ${address}`],
      [`State              : `, `Email     : `, `Email     : ${email}`],
      [, `Mobile   : `, `Mobile   : ${mobile}`],
      [, `GSTIN   : `, `GSTIN   : ${gstin}`],
      [, `State      : `, `State      : ${region}`],
    ],
  });

  finalY = doc.lastAutoTable.finalY;
  var count = 0; // SL.NO
  var bodyArray = [];
  for (const item of inputs) {
    var itemArray = [];
    for (const key in item) {
      if (Object.hasOwnProperty.call(item, key) && key !== "id") {
        itemArray.push(item[key]);
      }
    }
    itemArray.unshift(++count);
    itemArray.push(2, 2, 200);
    bodyArray.push(itemArray);
  }
  bodyArray.push([, , , , , "TOTAL AMOUNT", 1200]);
  doc.autoTable({
    theme: "grid",
    startY: finalY + 2,
    head: [
      ["SL.NO", "NAME", "QTY", "RATE(RS)", "SGST(%)", "CGST(%)", "TOTAL(RS)"],
    ],
    body: bodyArray,
  });

  doc.save("Invoice.pdf");
}

export default function getDetails(props) {
  const { receiver, itemInputs } = props;
  createPdf(receiver, itemInputs);
}
