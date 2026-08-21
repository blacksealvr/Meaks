/* ===================== MEKO WEBSITE SETTINGS =====================
   This is the ONLY file you need to edit for normal website updates.

   Add new updates/blog posts at the TOP of their lists.
   Add games by copying the example game object.
=================================================================== */
const SITE={
  name:'Meko Games VR',
  youtube:'https://www.youtube.com/@mekogamesVR',
  discord:'https://discord.gg/hjnYwJ8car',
  // OPTIONAL: put your YouTube CHANNEL ID here for automatic newest-video loading.
  // Example: UCxxxxxxxxxxxxxxxxxxxxxx
  youtubeChannelId:''
};

const GAMES=[
 {name:'Your VR Game',status:'In Development',description:'Replace this with your game description.',website:'',download:'',discord:SITE.discord,youtube:SITE.youtube}
];

const UPDATES=[
 {date:'August 21, 2026',category:'Website',title:'The Meko Games VR website is live!',description:'Welcome to the official Meko Games VR website. Future game updates, announcements, and news will appear here.'}
];

const BLOG_POSTS=[
 {title:'Welcome to Meko Games VR',date:'August 21, 2026',category:'Announcement',excerpt:'Welcome to the official Meko Games VR blog.',content:`<p>Welcome to the official Meko Games VR blog.</p><p>Use this section for development updates, behind-the-scenes posts, announcements, game news, and anything else you want to share.</p><h3>How to make a post</h3><p>Open <strong>js/config.js</strong>, copy this post, paste it above the old one, and change the title, date, category, excerpt, and content.</p>`,image:'',link:''}
];
