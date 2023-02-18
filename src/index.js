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
        <td><Icon /><FileName /></td>
        <td><Description /></td>
        <td><Type /></td>
    </tr>
)

const Icon = () => (
    <span>Icon</span>
)

const FileName = () => (
    <span>File Name</span>
)

const Description = () => (
    <p>This is a file.</p>
)

const Type = () => (
    <p>File Type</p>
)

const data = [
    {
        id: 1,
        name: 'legal',
        type: 'folder',
        updated_at: '2019-07-07 21:24:00',
        details: {
            description: 'Initial commit'
        }
    },
    {
        id: 2,
        name: 'Company Comment',
        type: 'file',
        updated_at: '2019-17-07 21:24:00',
        details: {
            description: 'Updates text'
        }
    },
    {
        id: 1,
        name: 'Organisation Chart',
        type: 'file',
        updated_at: '2019-12-07 21:24:00',
        details: {
            description: 'Adds level to org.'
        }
    }
]

const root = createRoot(document.getElementById('root'));
root.render(<FileList data={data}/>)