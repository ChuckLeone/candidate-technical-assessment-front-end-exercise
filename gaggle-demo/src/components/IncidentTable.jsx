import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "date", headerName: "Date", width: 70 },
  { field: "incidentType", headerName: "Incident Type", width: 130 },
  { field: "status", headerName: "Status", width: 130 },
];

const rows = [];

export default function IncidentTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
