import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const handlePopstate = (event) => {
      event.preventDefault();
      // Custom prompt message
      const confirmationMessage = 'Are you sure you want to go back?';
      if (window.confirm(confirmationMessage)) {
        // User confirmed, perform necessary actions
        // ...
      } else {
        // User canceled, prevent navigating back
        window.history.pushState(null, null, window.location.pathname);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('popstate', handlePopstate);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  return (
    <div>
      <h1>My Component</h1>
      {/* Your component content */}
    </div>
  );
};

export default MyComponent;