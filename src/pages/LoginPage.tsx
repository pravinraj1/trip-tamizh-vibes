import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { loginAsAdmin, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    loginAsAdmin();
    navigate('/blog'); // Redirect to blog page after login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Admin Login</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          {isAdmin ? (
            <p className="text-green-600 mb-4">You are already logged in as an administrator.</p>
          ) : (
            <p className="text-muted-foreground mb-4">Click the button below to log in as an administrator.</p>
          )}
          <Button onClick={handleLogin} disabled={isAdmin} className="w-full">
            Login as Admin
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
