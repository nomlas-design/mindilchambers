import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      const authorized = document.cookie.includes('authorized=true');
      if (!authorized) {
        Router.replace('/login');
      } else {
        setVerified(true);
      }
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
