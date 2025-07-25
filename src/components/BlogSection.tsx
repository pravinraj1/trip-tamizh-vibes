import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

interface BlogPostProps {
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  link: string;
}

const BlogPostCard: React.FC<BlogPostProps> = ({ title, date, excerpt, imageUrl, link }) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground mb-2">{date}</p>
        <CardTitle className="text-xl font-bold mb-3">{title}</CardTitle>
        <p className="text-muted-foreground mb-4">{excerpt}</p>
        <Link to={link}>
          <Button variant="outline">Read More</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Exploring the Ancient Wonders of Tamil Nadu",
      date: "July 20, 2025",
      excerpt: "Discover the rich history and architectural marvels of Tamil Nadu, from ancient temples to colonial forts.",
      imageUrl: "https://via.placeholder.com/400x250/FF5733/FFFFFF?text=Blog+Post+1",
      link: "/blog/post-1",
    },
    {
      title: "A Culinary Journey Through South Indian Flavors",
      date: "July 15, 2025",
      excerpt: "Indulge in the diverse and vibrant culinary landscape of Tamil Nadu, a treat for every food lover.",
      imageUrl: "https://via.placeholder.com/400x250/33FF57/FFFFFF?text=Blog+Post+2",
      link: "/blog/post-2",
    },
    {
      title: "Top 5 Offbeat Destinations in Tamil Nadu",
      date: "July 10, 2025",
      excerpt: "Venture beyond the usual tourist spots and explore the hidden gems of Tamil Nadu's natural beauty.",
      imageUrl: "https://via.placeholder.com/400x250/3357FF/FFFFFF?text=Blog+Post+3",
      link: "/blog/post-3",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Blog</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest travel guides, tips, and stories from Tamil Nadu.
          </p>
          {isAdmin && (
            <div className="mt-8">
              <Link to="/blog/new">
                <Button variant="default" size="lg">
                  Add New Blog Post
                </Button>
              </Link>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
