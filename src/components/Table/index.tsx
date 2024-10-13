import "./table.scss";

export type TableType = {
  header: string[];
  data: string[][];
  focuseRow?: string;
};

const Table = ({ header, data, focuseRow }: TableType) => {
  return (
    <table className="table">
      <tr>
        {header?.map((label) => (
          <th key={label}>{label}</th>
        ))}
      </tr>
      {data?.map((row) => (
        <tr key={row[0]} className={`${focuseRow === row[0] ? "foucs" : ""}`}>
          {row?.map((cell) => (
            <td key={cell}>{cell}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Table;
