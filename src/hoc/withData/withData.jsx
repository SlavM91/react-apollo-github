import React from 'react';
import {Table} from "@components/table";

export const withData = Component => ({ data, emptyMessageText, ...rest }) => <div>
    {
        data && data.length > 0
        ?  <Component data={data} {...rest}/>
        : <div>{emptyMessageText}</div>
    }
</div>;

export const TableWithData = withData(Table);