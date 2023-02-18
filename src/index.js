import React from "react";
import {createRoot} from 'react-dom/client'

const FileList = ({data}) => (
    <table>
        {data.map( item => (
            <FileListItem />
        ))}
    </table>
)

const FileListItem = () => (
    <tr>
        <td>Column 1</td>
        <td>Column 2</td>
        <td>Column 3</td>
    </tr>
)

const data = [
    {
        id: 1,
        name: 'legal',
        type: 'folder',
        updated_at: '2019-07-07 21:24:00',
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 2,
        name: 'Company Comment',
        type: 'file',
        updated_at: '2019-17-07 21:24:00',
        latestCommit: {
            message: 'Updates text'
        }
    },
    {
        id: 1,
        name: 'Organisation Chart',
        type: 'file',
        updated_at: '2019-12-07 21:24:00',
        latestCommit: {
            message: 'Adds level to org.'
        }
    }
]

const root = createRoot(document.getElementById('root'));
root.render(<FileList data={data}/>)