import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
