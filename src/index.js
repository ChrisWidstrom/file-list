import React from "react";
import { createRoot } from 'react-dom/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faFile, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';

const FileList = ({data}) => (
    <table>
        <tbody>
        {data.map( item => (
            <FileListItem item={item} key={item.id}/>
        ))}
        </tbody>
    </table>
)

const FileListItem = ({item}) => (
    <tr>
        <td><Icon type={item.type}/> <FileName fileName={item.name}/></td>
        <td><Description description={item.details.description}/></td>
        <td><Time uploadedAt={item.uploaded_at} /></td>
    </tr>
)

const Icon = ({type}) => {

    let iconType;

    switch (type) {
        case 'folder':
            iconType = faFolder;
            break;
        case 'file':
            iconType = faFile;
            break;
        default:
            iconType = faCircleQuestion;
    }

    return <FontAwesomeIcon icon={iconType} />
}


const FileName = ({fileName}) => (
    <span>{fileName}</span>
)

const Description = ({description}) => (
    <p>{description}</p>
)

const Time = ({uploadedAt}) => (
    <p>{moment(uploadedAt).fromNow()}</p>
)

const data = [
    {
        id: 1,
        name: 'Legal',
        type: 'folder',
        uploaded_at: '2019-07-07 21:24:00',
        details: {
            description: 'Initial commit'
        }
    },
    {
        id: 2,
        name: 'Company Comment',
        type: 'file',
        uploaded_at: '2019-17-07 21:24:00',
        details: {
            description: 'Updates text'
        }
    },
    {
        id: 3,
        name: 'Organisation Chart',
        type: 'file',
        uploaded_at: '2019-12-07 21:24:00',
        details: {
            description: 'Adds level to org.'
        }
    }
]

const root = createRoot(document.getElementById('root'));
root.render(<FileList data={data}/>)