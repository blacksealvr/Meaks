async function newestVideo(){
 const box=document.getElementById('latest-video');
 if(!box)return;
 let id=localStorage.getItem('meko_latest_video_id');
 if(id){box.innerHTML=`<iframe src="https://www.youtube.com/embed/${encodeURIComponent(id)}" title="Newest Meko Games VR video" allowfullscreen></iframe>`;return;}
 // Automatic mode: YouTube channel RSS -> rss2json. No API key is exposed.
 if(SITE.youtubeChannelId){
  try{
   const rss='https://www.youtube.com/feeds/videos.xml?channel_id='+encodeURIComponent(SITE.youtubeChannelId);
   const r=await fetch('https://api.rss2json.com/v1/api.json?rss_url='+encodeURIComponent(rss));
   const data=await r.json(); const item=data.items&&data.items[0];
   if(item){const m=item.link.match(/[?&]v=([^&]+)/);if(m){box.innerHTML=`<iframe src="https://www.youtube.com/embed/${m[1]}" title="${item.title.replace(/"/g,'&quot;')}" allowfullscreen></iframe>`;return;}}
  }catch(e){console.log('YouTube automatic feed unavailable',e)}
 }
 box.innerHTML=`<div class="video-placeholder"><div><div class="kicker">YOUTUBE</div><h3>Watch the newest Meko Games VR video</h3><p>New uploads will appear here when automatic YouTube mode is configured.</p><a class="btn primary" href="${SITE.youtube}" target="_blank">Open YouTube ↗</a></div></div>`;
}
function homeUpdates(){const el=document.getElementById('home-updates');if(el)el.innerHTML=UPDATES.slice(0,3).map(x=>`<article class="card"><span class="tag">${x.category}</span><h3>${x.title}</h3><div class="date">${x.date}</div><p>${x.description}</p></article>`).join('')}
document.addEventListener('DOMContentLoaded',()=>{newestVideo();homeUpdates()});
