import React from 'react';

export default function UserPicture({src, width}) {
	
return (
	<>
		<img className="profile-pic" src={src} width={width}/>
	</>
	);

}