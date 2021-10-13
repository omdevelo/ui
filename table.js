import React,{ useMemo } from 'react'
import { useTable } from 'react-table'
import sample_data from './sample_data.json'
import { columns } from './columns'
export const Table = () => {
    const col = useMemo(() => columns, [])
    const data = useMemo(() => sample_data, [])
    const tableInstance = useTable({
        col,
        data
    })
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
       } = tableInstance
       
    return (
        <table {...getTableProps()}>
            <thead>
            {
            headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
             ))}
            </tr>
        ))}
            </thead>
            <tbody {...getTableBodyProps()}>{
                rows.map(row=>{
                    prepareRow(row)
                    return(
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map((Cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })
                            }
                        </tr>
                    )
                })
            }

            </tbody>
        </table>
    )
}
export default Table
