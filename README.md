# 🥥 Coconut Reddit

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Gabi1M/coconut/tree/master.svg?style=svg&circle-token=00f98155763f89e32dd019e3c99066ac68dcd0f0)](https://dl.circleci.com/status-badge/redirect/gh/Gabi1M/coconut/tree/master)

A (for now) very basic Reddit app for iOS and Android, built using React Native.

# Why

This project was started with the purpose of familiarizing myself with the [Reddit API](https://www.reddit.com/dev/api/) and also help anyone else who wants to tinker with it, by hopefully providing some good examples on how the requests are being made and how they should be handled.

# Screenshots


| | | |
|-|-|-|
| <img height="300" src="https://user-images.githubusercontent.com/45296166/199353133-fe29c72c-629d-4895-b31e-b376be9e0685.png" /> | <img height="300" src="https://user-images.githubusercontent.com/45296166/199353315-dc3a724b-b9e4-4fd1-91a5-52cdd2fbbdc7.png" /> | <img height="300" src="https://user-images.githubusercontent.com/45296166/199353440-87c28a96-7cd0-420e-8b3d-92faa1b74b61.png" /> |
| <img height="300" src="https://user-images.githubusercontent.com/45296166/199353505-7bc9b69a-af69-4c43-a8bc-caee3f21b3bc.png" /> | <img height="300" src="https://user-images.githubusercontent.com/45296166/199353870-bc55cbed-ea42-4c4d-8d66-3e7bbed5f3af.png" /> | <img height="300" src="https://user-images.githubusercontent.com/45296166/199353968-0bb5689a-5441-4d6a-b2bb-276316ea8096.png" /> |
| <img height="300" src="https://user-images.githubusercontent.com/45296166/199354102-5e9b7872-c7db-4cc1-b373-79c9aa8939ba.png" /> |

# Features

For now, the functionality is limited to:
- Logging into an account.
- Browse your feed, sorted by `BEST`, `HOT`, `NEW` or `RISING`, with infinite scrolling.
- Search for posts, subreddits, users.
- View the posts in a specific subreddit.
- View the subreddits you have subscribed to.
- View the media of a post (photo, gallery, video, embed), html content and the first level of comments.
- View your karma and profile picture.

In the current state of the app, you must login in order to browse Reddit. Anonymous browsing functionality might come in the future.

# What's next

I don't have a roadmap on developing it, but the goal would be to support as much functionality as possible from the Reddit API.
That being said, the next most important things to implement would be:
- Interacting with the community by upvoting, downvoting, commenting, reporting, etc.
- Anonymous browsing support
- Chat

# Disclaimer

This application is not intended to be published either on App Store or on Google Play, nor do I aim to make any profit from it.

If you find out that the stuff I do helps you in any way and you want to use it to develop your own, all I ask is `give credit where credit is due` :)

# Credits and References

- [Reddit API](https://www.reddit.com/dev/api/)
- [Apollo](https://apolloapp.io/) for inspiration on the layout
