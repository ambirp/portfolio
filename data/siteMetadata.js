const siteMetadata = {
  title: 'Data Science Blogs',
  author: 'Ambir Patel',
  headerTitle: 'Ambir Patel',
  description: 'Blogs about data science and programming',
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
  comment: {
    provider: '', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: '', // username/repoName
      // Visit the link below, enter your repo in the configuration section and copy the script data parameters
      // Before that you should create a new Github discussions category with the Announcements type so that new discussions can only be created by maintainers and giscus
      // https://giscus.app/
      repositoryId: '',
      category: '',
      categoryId: '',
      mapping: '', // supported options: pathname, url, title
      reactions: '', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: '',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      repo: '', // username/repoName
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
      shortname: '',
    },
  },
}

module.exports = siteMetadata
