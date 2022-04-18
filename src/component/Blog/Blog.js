import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div>
            <div className='question-blog'>
            <h2>1. Difference between authorization and authentication.</h2>
            <p>Authentication means a process that verifying user who someone is. On the other hand authorization means a process that verifying what specific applications, files, and data a user has access to. Authentication is the main step for identity user and access management process or any applications. Authorization always takes place after authentication. </p>

            <h2>2. Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>Firebase is an application development platform. We use firebase for authentication purpose. We can host our web app easily on Firebase. Since it is google product it's very secure. Google Firebase has some alternative there are Back4App, AWS Amplify, Kuzzle, Couchbase, RxDB, LoopBack, Auth0 and Okta. We can use these platform as alternative of google firebase specially Auth0 and Okta</p>

            <h2>3.  What other services does firebase provide other than authentication</h2>
            <p></p>
            </div>
        </div>
    );
};

export default Blog;