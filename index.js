require('dotenv').config()

const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/admin', (req, res) => {
    res.send('Welcome admin gauravpatil9788860');
});

app.get('/login',(req,res)=>{
    res.send('<h1>Plz login </h1>')
});

app.get('/linkdein',(req,res)=>{
    res.send('<h1>Sucessfully login to Linkdeiln</h1>')
});

const githubdata={
  "login": "gauravpatil97886",
  "id": 63364646,
  "node_id": "MDQ6VXNlcjYzMzY0NjQ2",
  "avatar_url": "https://avatars.githubusercontent.com/u/63364646?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/gauravpatil97886",
  "html_url": "https://github.com/gauravpatil97886",
  "followers_url": "https://api.github.com/users/gauravpatil97886/followers",
  "following_url": "https://api.github.com/users/gauravpatil97886/following{/other_user}",
  "gists_url": "https://api.github.com/users/gauravpatil97886/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/gauravpatil97886/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/gauravpatil97886/subscriptions",
  "organizations_url": "https://api.github.com/users/gauravpatil97886/orgs",
  "repos_url": "https://api.github.com/users/gauravpatil97886/repos",
  "events_url": "https://api.github.com/users/gauravpatil97886/events{/privacy}",
  "received_events_url": "https://api.github.com/users/gauravpatil97886/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Gaurav Patil",
  "company": "SVKM IOT DHULE",
  "blog": "https://www.linkedin.com/in/gaurav-patil-0483751ab/",
  "location": "Maharashtra.India",
  "email": null,
  "hireable": null,
  "bio": "Software Developer ",
  "twitter_username": null,
  "public_repos": 64,
  "public_gists": 0,
  "followers": 24,
  "following": 5,
  "created_at": "2020-04-08T17:04:18Z",
  "updated_at": "2024-02-03T12:58:27Z"
}

app.get('/github',(req,res)=>
{
  res.json(githubdata)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port  ${port}`);
});
