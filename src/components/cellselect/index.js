import React, { useState } from 'react';
import { useTable } from 'react-table';
     

function CellSelect(props) {

    // Define state
    //const [cellValue, setCellValue] = useState('');
    const [selectedId, setSelectedId] = useState(-1);
    const [column, setColumn] = useState(-1)


    const data = React.useMemo(
        () => [
            {
                col1: '1',
                col2: '2',
            },
            {
                col1: '3',
                col2: '4',
            },
            {
                col1: '5',
                col2: '6',
            },
        ],
        []
    )

    // Define column of the table
    const columns = React.useMemo(
        () => [
            {
                Header: 'col1',
                accessor: 'col1',
            },
            {
                Header: 'col2',
                accessor: 'col2',
            },
        ],
        []
    )
 // Function to get cell value
 const getCellValue = (e, j) => {
    console.log(e);
    // setCellValue((cellvalue) =>
    //   cellvalue === "blue" ? (cellvalue = "red") : (cellvalue = "blue")
    // );
    setSelectedId(e.row.id)
    setColumn(j)
  };

// Create the instance of table by
    // using hooks of react-table
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    console.log("table created")

    return (
        <div>
            {/* Showing cell value */}
            <h3>Selected Cell Value </h3>
            <table {...getTableProps()}
                style={{ border: 'solid 1px blue' }}>
 
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell,j) => {
                                    return (
                                        <>
                                            <td
                                                onClick={() => {getCellValue(cell,j); props.sendData(cell.value)}}
                                                {...cell.getCellProps()}
                                                style={{
                                                    padding: '10px',
                                                    border: 'solid 1px gray',
                                                    background: selectedId === row.id && column === j ? 'red' : 'papayawhip',
                                                }}
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        </>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CellSelect;