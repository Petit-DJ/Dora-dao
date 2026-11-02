// Paste into the workbook: Extensions > Apps Script. Deploy > New deployment > Web app,
// Execute as: Me, Who has access: Anyone. Put the resulting URL in VITE_EVENTS_SUBMIT_URL.
// Every submission lands on the "Events" tab with Status = Pending.
const HEADERS = [
  "Status",
  "Title",
  "Date",
  "Time",
  "City",
  "Country",
  "Venue",
  "Category",
  "Description",
  "Link",
  "Image",
  "Host",
  "Email",
  "Submitted",
];

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getSheetByName("Events") || ss.insertSheet("Events");
  if (sh.getLastRow() === 0) sh.appendRow(HEADERS);
  const p = e.parameter;
  const clip = (v) =>
    String(v || "")
      .slice(0, 1000)
      .replace(/^[=+\-@]/, "'$&");
  if (!p.title || !p.date) return ContentService.createTextOutput("missing");
  sh.appendRow([
    "Pending",
    clip(p.title),
    clip(p.date),
    clip(p.time),
    clip(p.city),
    clip(p.country),
    clip(p.venue),
    clip(p.category),
    clip(p.description),
    clip(p.link),
    clip(p.image),
    clip(p.host),
    clip(p.email),
    new Date(),
  ]);
  return ContentService.createTextOutput("ok");
}
