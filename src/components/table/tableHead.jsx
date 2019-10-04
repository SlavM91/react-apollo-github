import React from 'react';

export const TableHead = ({headers = []}) =>
    <thead>
    <tr>
        {
            headers.map(
                (header, index) =>
                    <th key={`${header}-${index}`}>
                        {header}
                    </th>
            )
        }
    </tr>
    </thead>;