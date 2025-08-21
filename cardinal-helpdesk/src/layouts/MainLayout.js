import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const MainLayout = ({ children }) => {
  const { session, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-ivory-cream text-deep-teal">
      <header className="bg-deep-teal text-ivory-cream p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Cardinal HelpDesk</Link>
        </h1>
        <nav>
          {session ? (
            <div className="flex items-center">
              <span className="mr-4">{session.user.email}</span>
              <button
                onClick={signOut}
                className="bg-ivory-cream text-deep-teal font-bold py-2 px-4 rounded hover:bg-opacity-80"
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="font-bold py-2 px-4 rounded hover:bg-ivory-cream hover:text-deep-teal"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-ivory-cream text-deep-teal font-bold py-2 px-4 rounded hover:bg-opacity-80"
              >
                Sign Up
              </Link>
            </div>
          )}
        </nav>
      </header>
      <main className="p-4">
        {children}
      </main>
      <footer className="bg-deep-teal text-ivory-cream p-4 text-center">
        <p>&copy; 2025 Cardinal HelpDesk. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
