import React from 'react';

const SearchBox = ({ searchfield, searchchange}) => 
(<div className='pa2'>
    <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='Search Robots' 
     onChange= {searchchange}
    />
</div>)
 
export default SearchBox;