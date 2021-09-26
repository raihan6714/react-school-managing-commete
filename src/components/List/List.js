import React from 'react';

const List = (props) => {
    const { Name } = props;
    return (
        <div>
            <li className="list-group-item">{Name}</li>
        </div>
    );
};

export default List;