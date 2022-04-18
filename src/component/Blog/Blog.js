import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div>
            <div className='question-blog'>
            <h3 className='question-design'>1. Difference between authorization and authentication.</h3>
            <p className='question-answer'>Authentication means a process that verifying user who someone is. On the other hand authorization means a process that verifying what specific applications, files, and data a user has access to. Authentication is the main step for identity user and access management process or any applications. Authorization always takes place after authentication. </p>

            <h3 className='question-design'>2. Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p className='question-answer'>Firebase is an application development platform. We use firebase for authentication purpose. We can host our web app easily on Firebase. Since it is google product it's very secure. Google Firebase has some alternative there are Back4App, AWS Amplify, Kuzzle, Couchbase, RxDB, LoopBack, Auth0 and Okta. We can use these platform as alternative of google firebase specially Auth0 and Okta</p>

            <h3 className='question-design'>3.  What other services does firebase provide other than authentication</h3>
            <p className='question-answer'>Google firebase was used for various purpose.It gives various service except authentication. And it has different uses.The name of some uses or service are Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config. Firebase Hosting provides fast and secure hosting for your web app, static and dynamic content, and microservices.</p>
            </div>
        </div>
    );
};

export default Blog;