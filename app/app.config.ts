export default defineAppConfig({
    global: {
        email: 'kaungkhantjc@gmail.com',
        projectsTitle: "Building Solutions, Crafting Experiences.",
        projectsDescription: "I transform ideas into powerful applications using modern technologies and best practices. Each project represents my passion for solving complex challenges through native Android development, secure backends, and thoughtful user experiences.",
    },
    footer: {
        credits: `Copyright © ${new Date().getFullYear()}`,
        links: [{
            'icon': 'lucide:github',
            'to': 'https://github.com/kaungkhantjc',
            'target': '_blank',
            'aria-label': 'GitHub'
        }, {
            'icon': 'simple-icons:stackoverflow',
            'to': 'https://stackoverflow.com/users/13768552/kaung-khant-kyaw?tab=profile',
            'target': '_blank',
            'aria-label': 'Stackoverflow'
        }, {
            'icon': 'lucide:linkedin',
            'to': 'https://linkedin.com/in/kaungkhantjc',
            'target': '_blank',
            'aria-label': 'LinkedIn'
        }, {
            'icon': 'lucide:facebook',
            'to': 'https://fb.me/kaungkhantkyawprofile',
            'target': '_blank',
            'aria-label': 'Facebook'
        }, {
            'icon': 'lucide:mail',
            'to': 'mailto:kaungkhantjc@gmail.com',
            'target': '_blank',
            'aria-label': 'Email'
        }]
    }
})
