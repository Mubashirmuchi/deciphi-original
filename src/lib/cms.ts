import axios from 'axios';

// Blog Post Interface
export interface CMSBlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: {
    name: string;
    avatar?: string;
  };
  featuredImage: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  categories: string[];
  tags: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    canonicalUrl?: string;
  };
}

// Fallback data when CMS is not available
const fallbackPosts: CMSBlogPost[] = [
  {
    id: '1',
    slug: 'cybersecurity-best-practices-2024',
    title: 'Essential Cybersecurity Best Practices for 2024',
    excerpt: 'Discover the latest cybersecurity strategies to protect your business from evolving threats in 2024.',
    content: '<h1>Essential Cybersecurity Best Practices for 2024</h1><p>As cyber threats continue to evolve, businesses must stay ahead with robust security measures.</p><h2>1. Multi-Factor Authentication (MFA)</h2><p>Implement MFA across all systems to add an extra layer of security beyond passwords.</p><h2>2. Regular Security Audits</h2><p>Conduct quarterly security assessments to identify vulnerabilities before attackers do.</p>',
    publishedAt: '2024-08-30T00:00:00.000Z',
    author: { name: 'Deciphi Security Team' },
    featuredImage: {
      url: '/images/img_cybersecurity_1.png',
      alt: 'Cybersecurity Best Practices 2024',
      width: 1200,
      height: 630,
    },
    categories: ['Cybersecurity', 'Best Practices'],
    tags: ['cybersecurity', 'best-practices', '2024', 'security-tips'],
    seo: {
      metaTitle: 'Essential Cybersecurity Best Practices for 2024 | Deciphi',
      metaDescription: 'Discover the latest cybersecurity strategies to protect your business from evolving threats in 2024.',
      keywords: ['cybersecurity', 'best-practices', 'security', '2024'],
    },
  },
  {
    id: '2',
    slug: 'network-security-fundamentals',
    title: 'Network Security Fundamentals Every Business Should Know',
    excerpt: 'Learn the core principles of network security and how to implement them effectively.',
    content: '<h1>Network Security Fundamentals</h1><p>Network security forms the backbone of any comprehensive cybersecurity strategy.</p><h2>Firewalls and Network Segmentation</h2><p>Properly configured firewalls and network segmentation can prevent lateral movement of threats.</p>',
    publishedAt: '2024-08-25T00:00:00.000Z',
    author: { name: 'Deciphi Security Team' },
    featuredImage: {
      url: '/images/img_secure_database.png',
      alt: 'Network Security Fundamentals',
      width: 1200,
      height: 630,
    },
    categories: ['Network Security', 'Fundamentals'],
    tags: ['network-security', 'fundamentals', 'business', 'firewall'],
    seo: {
      metaTitle: 'Network Security Fundamentals Every Business Should Know | Deciphi',
      metaDescription: 'Learn the core principles of network security and how to implement them effectively.',
      keywords: ['network-security', 'fundamentals', 'business-security'],
    },
  },
  {
    id: '3',
    slug: 'penetration-testing-guide',
    title: 'Complete Guide to Penetration Testing',
    excerpt: 'Everything you need to know about penetration testing and its importance for your security posture.',
    content: '<h1>Complete Guide to Penetration Testing</h1><p>Penetration testing is a critical component of a comprehensive security strategy.</p><h2>What is Penetration Testing?</h2><p>Penetration testing simulates real-world attacks to identify vulnerabilities in your systems.</p>',
    publishedAt: '2024-08-20T00:00:00.000Z',
    author: { name: 'Deciphi Security Team' },
    featuredImage: {
      url: '/images/img_penetration_testing.png',
      alt: 'Penetration Testing Guide',
      width: 1200,
      height: 630,
    },
    categories: ['Penetration Testing', 'Security Assessment'],
    tags: ['penetration-testing', 'security-assessment', 'vulnerability', 'testing'],
    seo: {
      metaTitle: 'Complete Guide to Penetration Testing | Deciphi',
      metaDescription: 'Everything you need to know about penetration testing and its importance for your security posture.',
      keywords: ['penetration-testing', 'security-assessment', 'vulnerability'],
    },
  },
];

// API Functions
export async function getBlogPosts(): Promise<CMSBlogPost[]> {
  const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;
  const cmsType = process.env.NEXT_PUBLIC_CMS_TYPE || 'strapi';
  
  if (!cmsUrl) {
    console.log('No CMS URL configured, using fallback data');
    return fallbackPosts;
  }

  try {
    let response;
    
    if (cmsType === 'wordpress') {
      response = await axios.get(`${cmsUrl}/wp-json/wp/v2/posts?_embed`);
      return response.data.map(transformWordPressPost);
    } else {
      // Strapi
      response = await axios.get(`${cmsUrl}/api/blog-posts?populate=*&sort=publishedAt:desc`);
      return response.data.data.map(transformStrapiPost);
    }
  } catch (error) {
    console.error('Failed to fetch blog posts from CMS:', error);
    return fallbackPosts;
  }
}

export async function getBlogPost(slug: string): Promise<CMSBlogPost | null> {
  const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;
  const cmsType = process.env.NEXT_PUBLIC_CMS_TYPE || 'strapi';
  
  if (!cmsUrl) {
    return fallbackPosts.find(post => post.slug === slug) || null;
  }

  try {
    let response;
    
    if (cmsType === 'wordpress') {
      response = await axios.get(`${cmsUrl}/wp-json/wp/v2/posts?slug=${slug}&_embed`);
      const post = response.data[0];
      return post ? transformWordPressPost(post) : null;
    } else {
      // Strapi
      response = await axios.get(`${cmsUrl}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`);
      const post = response.data.data[0];
      return post ? transformStrapiPost(post) : null;
    }
  } catch (error) {
    console.error(`Failed to fetch blog post ${slug} from CMS:`, error);
    return fallbackPosts.find(post => post.slug === slug) || null;
  }
}

// Transform functions with safe property access
function transformStrapiPost(post: { id: string; attributes: Record<string, unknown> }): CMSBlogPost {
  const attrs = post.attributes;
  
  // Extract featured image from Strapi format
  const featuredImageData = attrs.featuredImage as { data?: { attributes?: Record<string, unknown> } };
  const imageAttrs = featuredImageData?.data?.attributes;
  
  // Extract categories from Strapi format
  const categoriesData = attrs.categories as { data?: Array<{ attributes?: { name?: string } }> };
  const categories = categoriesData?.data?.map(cat => cat.attributes?.name).filter(Boolean) || [];
  
  // Extract tags from Strapi format
  const tagsData = attrs.tags as { data?: Array<{ attributes?: { name?: string } }> };
  const tags = tagsData?.data?.map(tag => tag.attributes?.name).filter(Boolean) || [];
  
  return {
    id: post.id,
    slug: String(attrs.slug || ''),
    title: String(attrs.title || ''),
    excerpt: String(attrs.excerpt || ''),
    content: String(attrs.content || ''),
    publishedAt: String(attrs.publishedAt || new Date().toISOString()),
    author: {
      name: 'Deciphi Team',
    },
    featuredImage: {
      url: String(imageAttrs?.url || '/images/img_cybersecurity_1.png'),
      alt: String(imageAttrs?.alternativeText || attrs.title || ''),
      width: Number(imageAttrs?.width) || 1200,
      height: Number(imageAttrs?.height) || 630,
    },
    categories: categories as string[],
    tags: tags as string[],
    seo: {
      metaTitle: String(attrs.title || ''),
      metaDescription: String(attrs.excerpt || ''),
      keywords: [],
    },
  };
}

function transformWordPressPost(post: Record<string, unknown>): CMSBlogPost {
  const embedded = post._embedded as Record<string, unknown>;
  const featuredMedia = (embedded?.['wp:featuredmedia'] as Array<Record<string, unknown>>)?.[0];
  const categories = (embedded?.['wp:term'] as Array<Array<Record<string, unknown>>>)?.[0] || [];
  const tags = (embedded?.['wp:term'] as Array<Array<Record<string, unknown>>>)?.[1] || [];
  const mediaDetails = featuredMedia?.media_details as Record<string, unknown>;
  
  return {
    id: String(post.id || ''),
    slug: String(post.slug || ''),
    title: String((post.title as { rendered?: string })?.rendered || ''),
    excerpt: String((post.excerpt as { rendered?: string })?.rendered || '').replace(/<[^>]*>/g, ''),
    content: String((post.content as { rendered?: string })?.rendered || ''),
    publishedAt: String(post.date || new Date().toISOString()),
    author: {
      name: 'Deciphi Team',
    },
    featuredImage: {
      url: String(featuredMedia?.source_url || '/images/img_cybersecurity_1.png'),
      alt: String(featuredMedia?.alt_text || (post.title as { rendered?: string })?.rendered || ''),
      width: Number(mediaDetails?.width) || 1200,
      height: Number(mediaDetails?.height) || 630,
    },
    categories: categories.map(cat => String(cat.name)).filter(Boolean),
    tags: tags.map(tag => String(tag.name)).filter(Boolean),
    seo: {
      metaTitle: String((post.title as { rendered?: string })?.rendered || ''),
      metaDescription: String((post.excerpt as { rendered?: string })?.rendered || '').replace(/<[^>]*>/g, ''),
      keywords: [],
    },
  };
}
