import React from 'react';
import { TableHead } from './tableHead.jsx'
import { TableBody } from './tableBody.jsx';

export class Table extends React.PureComponent{
    render() {
        const {
            headers = [],
            data = [],
            handleDeleteRow,
            handleEditRow,
            showEditButton = true,
            showDeleteButton = true,
        } = this.props;
        return(
            <table>
                <TableHead headers={headers} />
                <TableBody
                    columns={data}
                    showEditButton={showEditButton}
                    showDeleteButton={showDeleteButton}
                    handleEditRow={handleEditRow}
                    handleDeleteRow={handleDeleteRow}
                />
            </table>
        )
    }
}