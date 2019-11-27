#!/bin/sh

cd ../

git subtree push --prefix backend heroku master

cd backend