
export const TableGlobalFilter = ({ filter, setFilter }) => {
    return (
        <span>
             {'    '}
            <input className='input1' value={filter} onChange={(e) => setFilter(e.target.value)} />
        </span>
    )
}