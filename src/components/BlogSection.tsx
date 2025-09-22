import face from '@/assets/beforeafter.jpg';
import breast from '@/assets/breast.jpeg';
import body from '@/assets/body.jpeg';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Understanding Facial Rejuvenation Options",
      excerpt: "Explore the latest non-surgical and surgical options for facial enhancement and anti-aging treatments.",
      date: "March 15, 2025",
      readTime: "5 min read",
      image: face
    },
    {
      title: "Recovery Tips for Breast Enhancement Surgery",
      excerpt: "Essential guidelines for a smooth recovery process and optimal results from breast enhancement procedures.",
      date: "March 10, 2025",
      readTime: "7 min read",
      image: breast
    },
    {
      title: "Body Contouring: What to Expect",
      excerpt: "A comprehensive guide to modern body contouring techniques and realistic expectations for results.",
      date: "March 5, 2025",
      readTime: "6 min read",
      image: body
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="font-prata text-4xl md:text-5xl font-normal text-primary mb-4">
              Latest Insights
            </h2>
            <p className="font-montserrat text-xl text-muted-foreground">
              Stay informed with the latest in plastic surgery and aesthetic medicine
            </p>
          </div>

          {/* Blog Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.title}
                className={`group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-luxury transition-luxury cursor-pointer slide-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Blog Image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Content */}
                <div className="p-6 space-y-4 font-montserrat">
                  <div className="space-y-2">
                    <h3 className="font-prata text-xl font-normal text-primary group-hover:text-primary-glow transition-smooth">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
