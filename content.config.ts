import {defineContentConfig, defineCollection, z} from '@nuxt/content'

const createBaseSchema = () => z.object({
    title: z.string(),
    description: z.string()
})

export default defineContentConfig({
    collections: {
        index: defineCollection({
            type: 'page',
            source: 'index.yml',
            schema: z.object({
                seo: createBaseSchema(),
                title: z.string(),
                description: z.string(),
                about: createBaseSchema(),
                experience: z.object({
                    title: z.string(),
                    items: z.array(z.object({
                        title: z.string(),
                        date: z.string(),
                        company: z.object({
                            name: z.string(),
                            url: z.string().optional(),
                            icon: z.string().optional(),
                            logo: z.string().url().optional(),
                        })
                    }))
                }),
                techStacks: z.object({
                    title: z.string(),
                    descriptions: z.array(z.string()),
                    technologies: z.array(z.object({
                        name: z.string(),
                        icon: z.string().optional(),
                        url: z.string().url().optional(),
                    }))
                }),
                featuredProjects: z.array(z.object({
                    name: z.string(),
                    year: z.string(),
                    description: z.string(),
                    url: z.string().url().optional(),
                    image: z.string().url().optional(),
                    tags: z.array(z.object({
                        name: z.string(),
                        url: z.string().url().optional(),
                    })),
                    extraLinks: z.array(z.object({
                        title: z.string(),
                        url: z.string().url(),
                    })).optional(),
                })),
            })
        }),
        projects: defineCollection({
            type: 'page',
            source: 'featured-projects/*.md',
            schema: z.object({
                year: z.number(),
                image: z.string().nonempty().editor({ input: 'media' }),
            })
        }),
        about: defineCollection({
            type: 'page',
            source: 'about.yml',
            schema: z.object({
                content: z.object({}),
            })
        })
    }
})
