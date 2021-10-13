import React from 'react';

export const FormErrors = ({formErrors}) =>{
    return <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
          if(formErrors[fieldName]){
            return (
              <p key={i}>{fieldName}</p>
            )        
          } else {
            return '';
          }
        })}
    </div>}

