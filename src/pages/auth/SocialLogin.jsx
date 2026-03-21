import React from 'react';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
    const { googleLogin } = useAuth();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => { console.log('Google login successful:', result.user); })
            .catch(error => { console.error('Google login error:', error); });
    };


    return (
        <div>
            <p className="text-center text-gray-500 my-3">Or</p>

        <button onClick={handleGoogleLogin} className="w-full border border-gray-200 bg-gray-100 hover:bg-gray-200 py-3 rounded-md flex items-center justify-center gap-2 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-sm font-medium text-gray-700">Continue with google</span>
        </button>
        </div>
    );
};

export default SocialLogin;