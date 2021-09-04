const siteMetadata = {
  title: 'Data Science Blogs',
  author: 'Ambir Patel',
  headerTitle: 'Data Science & Programming',
  description: 'Welcome to my page. Here you can find blogs about data science and programming',
  language: 'en-us',
  siteUrl: 'https://www.ambirpatel.me',
  siteRepo: 'https://github.com/ambirpatel/portfolio',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'ambir.patel@gmail.com',
  github: 'https://github.com/ambirpatel',
  twitter: 'https://twitter.com/ambir_p',
  linkedin: 'https://www.linkedin.com/in/ambirpatel',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: 'ambirpatel.me', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: true, // true or false
    googleAnalyticsId: 'UA-100201704-1', // e.g. UA-000000-2 or G-XXXXXXX
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: '', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: '', //process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: '', //process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: '', //process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: '', //process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: '', // supported options: pathname, url, title
      reactions: '', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: '',
      // theme when dark mode
      darkTheme: '',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: '', //process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqus: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: '', // process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
