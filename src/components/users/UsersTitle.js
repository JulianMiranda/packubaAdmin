import React from 'react';


export const UsersTitle = ({ record }) => {
    return <span>Usuario {record ? `"${record.name}"` : ''}</span>;
};
