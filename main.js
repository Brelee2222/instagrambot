const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')
 
const { username, password } = process.env 
 
const cookieStore = new FileCookieStore('./cookies.json')
const client = new Instagram({ username, password, cookieStore })
;(async () => {
  await client.login()
  photos = await client.getPhotosByHashtag({hashtag:'anotherbrelee'})
  console.log(photos.hashtag.edge_hashtag_to_media.edges)
  for(let like=0; like <= 10;like++) {
    await client.like({mediaId:photos.hashtag.edge_hashtag_to_media.edges[like].node.id})
  }

})()
