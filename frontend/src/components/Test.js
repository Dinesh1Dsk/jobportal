import React, { useState } from 'react'

export const Test = () => {


    const [i, s] = useState(false)
    const forms = document.querySelectorAll('g')

    console.log("forms",forms);
    // (() => {
    //     'use strict'
      
    //     // Fetch all the forms we want to apply custom Bootstrap validation styles to
        
      
    //     // Loop over them and prevent submission
    //     Array.from(forms).forEach(form => {
    //       form.addEventListener('submit', event => {
    //         if (!form.checkValidity()) {
    //           event.preventDefault()
    //           event.stopPropagation()
    //         }
      
    //         form.classList.add('was-validated')
    //       }, false)
    //     })
    //   })()


    function handleChange(e) {
        const selection = getSelection();
        const selectedText = selection.toString().trim();
    console.log(selectedText);
    
}


  return (<>
    <form on>
    <input  type="email" placeholder="Email" id="email" required />
    <input type="submit" id="submit"/>
      </form>
      
      <p onDoubleClick={handleChange}>Double-click this paragraph to trigger a function.</p>
      </>
  )
}
