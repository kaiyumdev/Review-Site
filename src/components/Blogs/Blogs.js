import React from "react";
import './Blogs.css'

const Blogs = () => {
  return (
    <div>
      <h1>This is my Blogs</h1>
      <div className="blogs-container">
        <div className="blogs">
          <h1>Context Api</h1>
          <p>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
          </p>
        </div>
        <div className="blogs">
          <h1>Semantic Tag</h1>
          <p>
            Semantic HTML, also known as semantic markup, refers to the use of
            HTML tags that convey the meaning—or semantics—of the content
            contained within them. By adding semantic HTML tags to your pages,
            you provide additional information that helps define the roles and
            relative importance of the different parts of your page.
          </p>
        </div>
        <div className="blogs">
          <h1>Inline-Block</h1>
          <p>
            The inline-block value is a strange combo of both block and inline.
            Elements accept width and height properties.Elements can have
            vertical and horizontal padding on all sides & you do not start on a
            new line There will often be a small gap between inline-block
            elements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
