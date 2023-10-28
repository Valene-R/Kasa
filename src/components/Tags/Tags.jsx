import React from 'react';

const Tags = ({tags}) => {
    return (
        <div>
            <ul className='tags'>
                {tags.map((tag) =>
                    <li key={tag} className='tag'>{tag}</li>
                )}  
            </ul>   
        </div>
    );
};

export default Tags;