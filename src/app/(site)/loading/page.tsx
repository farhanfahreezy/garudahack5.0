"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaCheckCircle } from 'react-icons/fa';

const LoadingPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showCheck, setShowCheck] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowCheck(true);
      const redirectTimer = setTimeout(() => {
        router.push('/home');
      }, 1000); // Delay before redirecting to /home

      return () => clearTimeout(redirectTimer);
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-white">
      {loading && (
        <>
          <div className="flex items-center justify-center mb-4">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-purple-200 h-32 w-32"></div>
          </div>
          <p className="text-lg font-semibold text-purple-700 text-center">
            Please wait, our AI assistant is trying to understand your preferences...
          </p>
        </>
      )}
      {showCheck && (
        <div className="flex items-center justify-center">
          <FaCheckCircle className="text-green-500 text-9xl" />
        </div>
      )}
    </div>
  );
};

export default LoadingPage;
