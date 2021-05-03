import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const AvatarField = ({record, size = '25', className}) =>
	record ? (
		<Avatar
			src={record.image.url}
			style={{width: parseInt(size, 15), height: parseInt(size, 15)}}
			className={className}
		/>
	) : null;

export default AvatarField;
