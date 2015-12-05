---
layout: post
title: Dealing with Grunt errors
tags:
- grunt
- web development
---

This is very much one of those "write about it to not forget it" posts. I'm guessing I'll be writing a good number of those. Some intro first.

I started using [Grunt](http://gruntjs.com/) yesterday as part of refactoring Bloc's  music webapp project into Angular JS. If you don't know, Grunt is a Javascript task runner and apparent recipient of [a rejected college mascot logo](http://gruntjs.com/img/grunt-logo.png). Grunt, like the similarly named Gulp (which I haven't explored yet), is supposed to "do most of that mundane work for you—and your team—with *basically zero effort*" (emphasis mine).

Like so many things in web development, that's "zero effort" once it's fully installed and [grokked](https://en.wikipedia.org/wiki/Grok). Until then, it's one more thing to cause delays before you can get down to coding. I'm certainly feeling annoyed with it now, but I do recognize its utility--or at least developer who I trust recognize its utility.

Grunt is installed via the [node package manager](https://en.wikipedia.org/wiki/Npm_(software\)) (npm), which is the default for Node JS packages, as it sounds. Grunt isn't built with Node (I don't think. Maybe it does, actually.), but it uses it regardless. I only mention that because it contributed to my confusion while troubleshooting an error the past two days.

I went through the "Getting Started" instructions on the Grunt website, but kept getting this series of ominous errors:

~~~bash
npm ERR! Darwin 14.4.0
npm ERR! argv "node" "/usr/local/bin/npm" "install" "-g" "grunt-cli"
npm ERR! node v0.12.4
npm ERR! npm  v2.10.1
npm ERR! path /usr/local/lib/node_modules/grunt-cli
npm ERR! code EACCES
npm ERR! errno -13

npm ERR! Error: EACCES, rmdir '/usr/local/lib/node_modules/grunt-cli'
npm ERR!     at Error (native)
npm ERR!  { [Error: EACCES, rmdir '/usr/local/lib/node_modules/grunt-cli']
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   path: '/usr/local/lib/node_modules/grunt-cli' }
npm ERR! 
npm ERR! Please try running this command again as root/Administrator.
npm ERR! error rolling back Error: EACCES, rmdir '/usr/local/lib/node_modules/grunt-cli'
npm ERR! error rolling back     at Error (native)
npm ERR! error rolling back  { [Error: EACCES, rmdir '/usr/local/lib/node_modules/grunt-cli']
npm ERR! error rolling back   errno: -13,
npm ERR! error rolling back   code: 'EACCES',
npm ERR! error rolling back   path: '/usr/local/lib/node_modules/grunt-cli' }

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/[MY USER NAME]/npm-debug.log
~~~

The recurring message is `npm ERR!`. Since my Terminal shows `ERR!` in red you'd think the exclamation point would be unnecessary, but I digress. What this tells me is that npm isn't operating properly. I tried using a `sudo` call to force the install as one [Stack Overflow *accepted answer*](http://stackoverflow.com/questions/20555605/how-can-i-install-the-grunt-cli-without-getting-errors) mentioned. It wasn't until after I did that I read the follow up, which cautions strongly against using `sudo` in this case.

Next, I thought it might be good to make sure npm was updated. A search for that led me to [its GitHub repo](https://github.com/npm/npm#apple-macintosh-computers), which basically said that npm is part of NodeJS and to install the latter. Of course, I already had. These kind of system applications(?) aren't as self-contained as something like Evernote or Excel and they also aren't as easy to view in the OSX <abbr title="graphic user interface">GUI</abbr> in order to see if you installed it right. For those reasons, I didn't want to just run the Node install script again. Plus, there's probably a better way.

[So how do you update Node](http://stackoverflow.com/questions/8191459/how-to-update-node-js) (on a Mac)? Turns out, that'd be with the appropriately named Node Version Manager (NVM). *Are you enjoying the replay of my searches from yesterday yet? We're almost done.* Once I had [NVM installed](https://github.com/creationix/nvm#install-script), it was a matter of running `nvm install 0.12` (since Node is currently in version series 0.12--0.12.7, to be exact), then `nvm use 0.12` to tell my computer to actually use this new version of Node.

Going back to the begnning of this story, now running `npm install -g grunt-cli` to install Grunt and its command line tools worked great!

For some reason I ran into the same issue today. After going through my terminal and browser history, I was reminded of this, updated Node again and all was working. Grunt broke today after I ran a git push in the wrong folder, so I'm guessing that was the problem. Regardless, now I have this super interesting post to remind me the next time!

**UPDATE:** In case it wasn’t clear, part of what happened here was that I’d updated node one day, then the next day (when I first wrote this) node was back to the earlier version. Hence, I was frustrated enough to write a blog post about it. This happened every time I closed Terminal, actually.

With a little searching, I found a [blog post with a comment](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps#comment_5197) noting a similar problem. The next comment gave me my more permanent solution. `nvm alias default XX.XX.XX` sets the new default version of node. If you read the post it explains why nvm doesn’t do this automatically.