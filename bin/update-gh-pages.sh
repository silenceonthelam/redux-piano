#!/bin/sh

# node_modules/bin/.webpack -p --config webpack.dist.config.js
# outputs to /static/
npm dist

# create new dir
mkdir dist && cd dist/

git clone https://github.com/silenceonthelam/redux-piano.git

cd redux-piano

git checkout gh-pages

rm -rf *

cp -R ../static/ .

rm -rf ../static/

git add --all

git commit -m "update gh-pages"

git push