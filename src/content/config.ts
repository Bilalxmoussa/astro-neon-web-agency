import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    keyword: z.string(),
    h1: z.string(),
    heroDescription: z.string(),
    icon: z.string(),
    sections: z.array(z.object({
      heading: z.string(),
      content: z.array(z.string()),
    })),
    features: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
    stats: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
    relatedServiceSlugs: z.array(z.string()).optional(),
    relatedBlogSlugs: z.array(z.string()).optional(),
  }),
});

const areas = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    keyword: z.string(),
    h1: z.string(),
    heroDescription: z.string(),
    mapEmbedUrl: z.string().optional(),
    demographics: z.string().optional(),
    landmarks: z.array(z.string()).optional(),
    neighborhoods: z.array(z.string()).optional(),
    sections: z.array(z.object({
      heading: z.string(),
      content: z.array(z.string()),
    })),
    features: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
    stats: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
    relatedLocations: z.array(z.string()),
    relatedBlogSlugs: z.array(z.string()).optional(),
    relatedIndustrySlugs: z.array(z.string()).optional(),
  }),
});

const industries = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    keyword: z.string(),
    h1: z.string(),
    heroDescription: z.string(),
    sections: z.array(z.object({
      heading: z.string(),
      content: z.array(z.string()),
    })),
    features: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
    stats: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
    relatedIndustries: z.array(z.string()),
    relatedBlogSlugs: z.array(z.string()).optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    keyword: z.string(),
    datePublished: z.string(),
    dateModified: z.string(),
    excerpt: z.string(),
    readTime: z.string(),
    relatedBlogSlugs: z.array(z.string()).optional(),
    relatedIndustrySlugs: z.array(z.string()).optional(),
  }),
});

export const collections = { services, areas, industries, blog };
