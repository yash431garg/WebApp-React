export const TableGlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ width: "30vw" }}
      />
    </span>
  );
};
