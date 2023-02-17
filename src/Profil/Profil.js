import React from 'react'
import PropTypes from 'prop-types'; // ES6
import Img from './Img';
 const Profil = ({fullName,bio,profision,handleName}) => {
    const ListStyle = {
        color: "red",
        display: "flex",
        justifyContent: "Space between",
      };
     Profil.propTypes = {
        fullName: PropTypes.string,
        bio: PropTypes.string,
        profision:PropTypes.string,
        
        handleName:PropTypes.func,
      } 
  return (
    < >
     <button onClick={()=>handleName(fullName)} >go</button>
     <h1 style={ListStyle}>{fullName}</h1>
     <h1>{bio}</h1>
     <h1>{profision}</h1>
    <Img/>
 
     </>
     
      
     )
    
}
Profil.defaultProps={
    fullName:"test",
    bio:"test",
}
export default Profil 