import axios from "axios";
import { useState,useEffect } from "react";
let Todo = () => {
    let [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://gorest.co.in/public/v2/todos").then((res) => {
            setData(res.data);
        })
    })
    return (
        <div className="todo">
            <h1>Todo Items</h1>
            <table className="todoTable">
                <tr>
                    <th>Id</th>
                    <th>User Id</th>
                    <th>Title</th>
                    <th>Due Date</th>
                    <th>Status</th>
                </tr>
                {
                    data.map((val) => {
                        return (
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.user_id}</td>
                                <td>{val.title}</td>
                                <td>{val.due_on}</td>
                                <td>{val.status}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default Todo;