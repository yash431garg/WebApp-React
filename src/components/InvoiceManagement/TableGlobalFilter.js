
export const TableGlobalFilter = ({ filter, setFilter }) => {
    return (
        <span>
             {'    '}
            <input className='input' value={filter} onChange={(e) => setFilter(e.target.value)} />
        </span>
    )
}