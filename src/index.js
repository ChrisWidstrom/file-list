import React from "react";
import { createRoot } from "react-dom/client";
import moment from "moment";
import "./index.css";

const FileList = ({ data }) => (
  <div className="container">
    <Header />
    <Main data={data}/>
  </div>
);

const Main = ({data}) => (
  <div className="main">
    <table className="table">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Comment</th>
          <th>Uploaded</th>
        </tr>

        {data.map((item) => (
          <FileListItem item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  </div>
);

const Header = () => (
  <div className="header">
    <span className="heading">File Manager</span>
  </div>
);

const FileListItem = ({ item }) => (
  <tr>
    <td>
      <Icon type={item.type} /> <FileName fileName={item.name} />
    </td>
    <td>
      <Description description={item.details.description} />
    </td>
    <td>
      <Time uploadedAt={item.uploaded_at} />
    </td>
  </tr>
);

const Icon = ({ type }) => {
  let iconClass = "";

  switch (type) {
    case "folder":
      iconClass = "fa fa-folder";
      break;
    default:
    case "file":
      iconClass = "fa fa-regular fa-file";
      break;
  }

  return <i className={iconClass}></i>;
};

const FileName = ({ fileName }) => <span className="title">{fileName}</span>;

const Description = ({ description }) => <p>{description}</p>;

const Time = ({ uploadedAt }) => <p>{moment(uploadedAt).fromNow()}</p>;

const data = [
  {
    id: 1,
    name: "Legal",
    type: "folder",
    uploaded_at: "2019-07-07 21:24:00",
    details: {
      description: "Initial commit",
    },
  },
  {
    id: 2,
    name: "Company Comment",
    type: "file",
    uploaded_at: "2019-07-07 21:24:00",
    details: {
      description: "Updates text",
    },
  },
  {
    id: 3,
    name: "List of key employees",
    type: "file",
    uploaded_at: "2019-12-07 21:24:00",
    details: {
      description: "Adds level to org.",
    },
  },
  {
    id: 4,
    name: "List of largest suppliers",
    type: "file",
    uploaded_at: "2019-12-07 21:24:00",
    details: {
      description: "Adds level to org.",
    },
  },
  {
    id: 5,
    name: "List of largest customers",
    type: "file",
    uploaded_at: "2019-12-07 21:24:00",
    details: {
      description: "Adds level to org.",
    },
  },
];

const root = createRoot(document.getElementById("root"));
root.render(<FileList data={data} />);
