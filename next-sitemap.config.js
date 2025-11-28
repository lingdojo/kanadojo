/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: process.env.SITE_URL || 'https://kanadojo.com', // Replace with your site's URL
  generateRobotsTxt: true, // This line enables robots.txt generation
  // You can add other sitemap configuration options here
  // For example:
  changefreq: 'daily',
  priority: 0.8
  // exclude: ['/private/*'],
  // robotsTxtOptions: {
  //   additionalSitemaps: [
  //     'https://example.com/server-sitemap.xml', // If you have a separate server-side sitemap
  //   ],
  //   policies: [
  //     { userAgent: 'Googlebot', allow: '/' },
  //     { userAgent: 'AhrefsBot', disallow: ['/'] }, // Example: Disallow a specific bot
  //   ],
  // },
};
