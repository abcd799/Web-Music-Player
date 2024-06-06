# Web Music Player

This project is a web-based music player built using React and the Spotify API. It allows users to log in with their Spotify account and play their favorite music.

## Table of Contents

- [Web Music Player](#web-music-player)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Watch the video demo](#watch-the-video-demo)
  - [Screens](#screens)
    - [Login Screen](#login-screen)
    - [Home Screen](#home-screen)
    - [Browse Screen](#browse-screen)
    - [Player Screen](#player-screen)
    - [Liked Screen](#liked-screen)
    - [Playlist Screen](#playlist-screen)
  - [Learning Outcomes](#learning-outcomes)
  - [Installation and Setup](#installation-and-setup)
  - [Technologies Used](#technologies-used)
  - [Feedback and Issues](#feedback-and-issues)
    - [Contact Details](#contact-details)

## Features

- **Login Screen**: Users can log in using their Spotify account and grant permissions to access playlists, recently played songs, and more.
- **Home Screen**: Displays recently played songs, followed artists, top artists, and playlists made for the user.
- **Browse Screen**: Users can explore various music categories.
- **Player Screen**: Plays selected playlists with controls for play/pause, next, previous, repeat, etc.
- **Liked Screen**: Shows tracks liked by the user.
- **Playlist Screen**: Displays playlists created by the user.
  
## Watch the video demo

[Watch Demo 1](https://github.com/abcd799/Web-Music-Player/assets/154737521/b13f9341-7ec6-44c3-8580-3f410f067996)

[Watch Demo 2](https://github.com/abcd799/Web-Music-Player/assets/154737521/e6665ecd-df5a-4d36-8ebf-2b948872e857)

## Screens

### Login Screen

The login screen has a simple interface that asks you to log in to your Spotify account. By logging in, you grant various permissions such as `playlist-read-private`, `user-library-read`, `user-top-read`, etc. This allows the music player to fetch information about your account.

![Login Screen](https://github.com/abcd799/Web-Music-Player/assets/154737521/c6c11a5c-1e40-4968-b902-8509559e6265)

Click the sign-up button:

![Spotify Permissions](https://github.com/abcd799/Web-Music-Player/assets/154737521/5e57041c-33de-4787-a376-498176f3daf5)

After agreeing to the permissions, an access token is generated in the URL. This token is retrieved and stored in local storage, and is used for authenticated requests to the Spotify API.

### Home Screen

The home screen consists of several components:

- **Recently Played Songs**: Displays songs you've recently played.
- **Followed Artists**: Shows artists you follow.
- **Top Artists**: Highlights your top artists.
- **Feature Playlists**: Lists playlists made for you.

![Home Screen](https://github.com/abcd799/Web-Music-Player/assets/154737521/b86d897d-46b5-4372-97ed-b577963de7ca)

![Home Screen Details](https://github.com/abcd799/Web-Music-Player/assets/154737521/f4f52706-f5f0-4b09-b397-91186fd1842c)

### Browse Screen

The browse screen displays various music categories for you to explore.

![Browse Screen](https://github.com/abcd799/Web-Music-Player/assets/154737521/cb195bd9-a916-46ee-a59a-a543511b7db1)

### Player Screen

The player screen is where you can listen to tracks from your playlists. If no playlist is selected, it prompts you to check out the Playlist section.

![No Tracks Available](https://github.com/abcd799/Web-Music-Player/assets/154737521/c9f90b2f-7c03-48db-9543-b5c53dd89d66)

When a playlist is selected, it plays songs from that playlist.

![Player Screen](https://github.com/abcd799/Web-Music-Player/assets/154737521/2f957df1-8254-4e25-b976-ca83c4f09463)

Components in the player screen:

1. **AudioPlayer Component**: Controls for play/pause, next, previous, and repeat.
2. **Widget Component**: Displays similar artists, new releases, and personalized recommendations.
3. **SongCard Component**: Shows track details like image, name, artist, and release date.
4. **Queue Component**: Displays the queue of upcoming tracks.

### Liked Screen

Shows tracks you've liked, with details such as image, name, artist, album, and duration. You can play these songs by clicking on them.

![Liked Screen](https://github.com/abcd799/Web-Music-Player/assets/154737521/45b0cc19-38a9-492d-9290-16feaedb6fd9)

![Liked Screen Details](https://github.com/abcd799/Web-Music-Player/assets/154737521/caf68211-585c-459c-855d-a953072a855a)

### Playlist Screen

Displays playlists created by you, with the cover image, name, and total number of tracks.

![Playlist Screen](https://github.com/abcd799/Web-Music-Player/assets/154737521/ada3105c-26ed-45ed-8c83-0c4dd4e1dd2c)

![Playlist Screen Details](https://github.com/abcd799/Web-Music-Player/assets/154737521/d61bdd46-4a33-484d-a496-be5e5342e481)

## Learning Outcomes

Throughout this project, I gained a deep understanding of various aspects of React and web development:

1. **Component Structure**: Learned the hierarchical structure of React components.
2. **React Hooks**:
    - `useState`: To manage state.
    - `useEffect`: To perform side effects in function components.
    - `useRef`: To create references, such as for audio controls.
    - `useCallback`: To memoize functions for performance optimization.
3. **Authentication**: Understood how to implement user authentication and authorization.
4. **Token Management**: Learned how to retrieve and store tokens (stored in local storage for this project, though not recommended for production).
5. **Component Reusability**: Gained experience in creating reusable components using props.
6. **React Router**: Used `react-router-dom` for navigation between different screens.
7. **useLocation Hook**: Utilized to pass state data between routes.
8. **API Integration**: Integrated with external APIs (Spotify) to fetch and manipulate data.
9. **Libraries**: Leveraged libraries like Axios for HTTP requests and React Icons for UI enhancements.

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository using :**

    ```sh
    git clone https://github.com/abcd799/spotify-web-music-player.git
    cd spotify-web-music-player
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up Spotify credentials:**
    Update the `spotify.js` file in the `src` directory and add your Spotify API credentials:

    ```javascript
    // src/spotify.js

    const clientId = '...............................';
    // Replace the clientId above with your own clientId obtained from the Spotify Developer Dashboard
    
    ```

4. **Start the development server:**

    ```ssh
    npm start
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Technologies Used

|Technology|Purpose|
|---|---|
| [![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)| JavaScript library for building user interfaces|
| [![spotify](https://img.shields.io/badge/Spotify_For_Developers-1ED760?&style=for-the-badge&logo=spotify&logoColor=white)](https://developer.spotify.com/)| To fetch music data|
| [![axios](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)| For making HTTP requests|
| [![react router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/en/main)| For navigation|
| [![react icons](https://img.shields.io/badge/React_Icons-E91E63?style=for-the-badge&logo=semanticuireact&logoColor=white)](https://react-icons.github.io/react-icons/)| For UI icons|

## Feedback and Issues

If you encounter any issues or have any suggestions for improvement, please feel free to reach out. I'm always eager to learn and adopt new things. Thank you for your support and feedback!

### Contact Details

 [![X](https://img.shields.io/badge/Twitter-%23000000.svg?style=Social&logo=X&logoColor=white)](https://x.com/abhi22411)

 [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/abcd799)

 Gmail - <srk79325@gmail.com>
