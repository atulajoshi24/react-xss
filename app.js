import React, { useState } from 'react';

import DOMPurify from 'dompurify'

function App() {
  const [text, setText] = useState('');

  const blog = `This is a Test Blog. This <b>blog</b> is about CyberSecurity. 
  <h1>Very Important to Read</h1>
  <p onmouseover="alert('mouseover');">This should render as Plain Text<p>
  `
  const sanitizedBlog = DOMPurify.sanitize(blog);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h1>{text}</h1>
      <div dangerouslySetInnerHTML={{__html:sanitizedBlog}}>     
      </div>
      <h1>{sanitizedBlog}</h1>
    </div>      
  );
}

export default App;
