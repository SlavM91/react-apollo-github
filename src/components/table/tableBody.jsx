import React from 'react';
import { Button} from "../button";

export const TableBody = ({
  columns = [],
  showDeleteButton,
  showEditButton,
  handleEditRow,
  handleDeleteRow,
}) =>
    <tbody>
    {
        columns.map(
            ({ id, ...rest }) => {
               return (
                   <tr key={`${id}`}>
                       {
                           Object.values(rest).map((item, index) =>
                               <td key={`${item}-${index}`}>
                                   {item}
                               </td>
                           )
                       }
                       {
                           showDeleteButton
                           && <td>
                             <Button buttonText="Delete" onClick={ () => handleDeleteRow(id)}/>
                           </td>
                       }
                       {
                           showEditButton
                           && <td>
                             <Button buttonText="Edit" onClick={ () => handleEditRow(id)}/>
                           </td>
                       }
                   </tr>
               )
            }
        )
    }
    </tbody>;