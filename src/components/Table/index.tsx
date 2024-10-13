import "./table.scss";

export type TableType = {
  header: string[];
  data: string[][];
  focuseRow?: string;
};

const Table = ({ header, data, focuseRow }: TableType) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {header?.map((label, idx) => (
            <th key={idx}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, idx) => (
          <tr key={idx} className={`${focuseRow === row[0] ? "foucs" : ""}`}>
            {row?.map((cell, idx) => (
              <td key={idx}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
