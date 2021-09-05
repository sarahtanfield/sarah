[**Live web version here**](https://sarahtanfield.now.sh/)

# Portfolio

This is a portfolio website for Sarah Tanfield - a New Zealand bookbinder and structural packaging maker.

## Services

`Terminal` is an app on your computer where you can talk to `Git` and `Vercel`.
`Git` is like Dropbox for apps and websites. It saves history and changes.
`Vercel` is your the host of your website. When people enter your domain name url in their browser, Vercel sends them your website files.
`Github` is an online thing for Git. By default Git is just local to your computer, or you need to set up your own Git server.

## How to edit the website

Edit `media.tbtl` database or `index.html`.

## How to test the website

Open `index.html` in a browser.

## How to save changes

- Open `Terminal`.
- To open this project's folder type `cd sarah` or `cd ` then the location of the folder - you can also drag the folder into terminal at this point.
- To see what changes there are type `git status`.
- To "stage" all the changes you have made type `git add .` (git, add everything).
- To "commit" the staged changes type `git commit -m ` and then a message for the commit, briefly describing what you have done. EG: `git commit -m add instructions to readme`.
- To "push" the committed changes to Github (where the website history is stored) type `git push`.

## How to publish your website changes online

- Open `Terminal`.
- To open this project's folder type `cd sarah` or `cd ` then the location of the folder - you can also drag the folder into terminal at this point.
- To publish your website online type `vercel`, this is a test publish, it will give you a url to check.
- If everything looks good, to publish your website online into "production" type `vercel --prod`.

## If things go wrong with Vercel

- It asks if you want to deploy. Yes. It'll ask which user, pick `swan` (it's a team so Hamish can access it too), then pick project `sarah`.
- You might need to update. To update type: `npm i -g vercel@latest`.
- You might need to log in. To log in type: `vercel login`.

## To do
- BUG: linux? does not show prev icon, instead shows next for both
- Homescreen next/prev should scroll through all media maybe
- Set up build system for static no-js website
- Set up lightbox next/prev system to work with build
- Refactor clean up menu title system
