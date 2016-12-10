import React from 'react';

import AccountsUI from '../AccountsUI.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
import Navbar from '../Navbar.jsx';
import Test from '../Test.jsx';
import TeacherSignUpForm from '../accounts/teachers/signupform/TeacherSignUpForm.jsx';
import SignUpForm from '../accounts/signupform/SignUpForm.jsx';
import LoginForm from '../accounts/loginform/LoginForm.jsx';
import AdminDashBoard from '../admin/AdminDashBoard.jsx';
import TeachersIndex from '../teachers/TeachersIndex.jsx';
import Conversations from '../messaging/Conversations.jsx';
export const MainLayout = ({ content }) => (
    <div>
    <Navbar />
    <div className='conatiner'>
      {content}
    </div>
    {/* <Test /> */}
    <TeacherSignUpForm />
    <TeachersIndex />
    sad
    <SignUpForm />
    <Conversations />

    {/* <AdminDashBoard /> */}

    {/* <LoginForm /> */}
    </div>
);
