document.addEventListener('DOMContentLoaded',()=>{
 const header=document.querySelector('header');
 if(header)header.innerHTML=`<div class="wrap nav"><a class="logo" href="index.html">MEKO <b>GAMES VR</b></a><nav class="links"><a href="index.html">Home</a><a href="games.html">Games</a><a href="updates.html">Updates</a><a href="blog.html">Blog</a><a href="about.html">About</a><a href="${SITE.youtube}" target="_blank">YouTube ↗</a></nav><button class="nav-btn" onclick="alert('Use the navigation links on desktop, or tap a page link from the address bar.')">☰</button></div>`;
 const footer=document.querySelector('footer');
 if(footer)footer.innerHTML=`<div class="wrap footer"><span>© 2026 Meko Games VR. All rights reserved.</span><div class="footer-links"><a href="${SITE.youtube}" target="_blank">YouTube</a><a href="${SITE.discord}" target="_blank">Discord</a></div></div>`;
});
