# NextJS x Typescript x Storyblok

## How to start

0. `Use this template` (top) > clone the repo
1. **Storyblok**: clone _Pelostudio - NextJS_ space
2. **Storyblok**: Space settings > API-Keys > Copy `preview` key
3. **Code**: `app/common/config.ts`: update `STORYBLOK_TOKEN`
4. **Code**: `package.json`: update `name`
5. **Code**: `app/common/config.ts`: update `STORYBLOK_TOKEN`
6. **Specify**: go to https://specifyapp.com and log in with your Pelostudio Google account
7. **Specify**: go to _Settings_ > _Access Tokens_ > Generate an access token
8. **Code**: `specifyrc.json`: update personalAccessToken`
9. **Specify**: go to start page > Copy repository name
6. **Code**: `specifyrc.json`: update `repository`
7. **Netlify**: create a new project
8. **Netlify**: Site settings > Site details > update name to something meaningful but secure _(ex: client-pelostudio-w567d92)_
9. **Netlify**: Site settings > Build & Deploy > Continuous Deployment > Turn off _Deploy Previews_
10. **Storyblok**: Space settings > use `https://YOUR_NETLIFY_NAME.netlify.app/storyblok-preview?slug=` as location
11. **Storyblok**: Space settings > click on `Add a preview URL` > use `http://localhost:3000/storyblok-preview?slug=` as `dev` preview url
13. **Terminal**: Run `npm i` to update `package-lock.json`
14. **Terminal**: Run `npm run specify`
15. **Terminal**: Run `git add --all && git commit -m "Init" && git push --set-upstream origin main`
16. **GitHub**: Go to repository > Settings > Collaborators and teams > `Add teams` > `pelostudio/pelodev` as Administrator
17. **GitHub**: Go to repository > Settings > Branches > `Add rule` > Branch name pattern: `main` > Check `Require a pull request before merging` > click **Create** (bottom)

**Enjoy** 🎉

PS: **Code**: `styles/_config.scss` > update or delete this file

---

## Start a development server with https proxy

Install mkcert for creating a valid certificate (Mac OS):
```
$ brew install mkcert
$ mkcert -install
$ mkcert localhost
```
        
Then install and run the proxy
```
$ npx local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem
```

https is now running on port 3010 and forwarding requests to http 3000