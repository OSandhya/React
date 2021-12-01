import React from "react";
import {Link} from "react-router-dom";
class  BookDetails extends React.Component {
    render() { 
        return <div>
            <table>
            <thead>
                <tr>
            <th>Book</th>
            <th>Source</th>
        </tr>
            </thead>
            <tbody> 
                <tr>    
                    <td>Think Python</td>
                    <td>
            <Link to="https://www.rcsdk12.org/cms/lib/NY01001156/Centricity/Domain/4951/Head_First_Java_Second_Edition.pdf" class="link-primary">Source</Link>
        </td>
         </tr>
         </tbody>
            </table>
        </div>;
    }
}
 
export  default BookDetails ;