# React Memory Game

![Game Images](https://github.com/FullStackPete/CatMemoryGame/assets/123159152/18c8b559-fd43-4f54-bf62-3742608eb438)

[Live on netlify! Click here.](https://luxury-stroopwafel-b36b51.netlify.app/)

A memory game built with React and Tailwind CSS, featuring parallax tilt effects and card flipping animation. The game fetches images of cats from TheCatAPI to make it more fun!



## Features

- Memory game with card flipping animation
- Parallax tilt effects using `react-parallax-tilt`
- Fetches cat images from TheCatAPI
- Responsive design with Tailwind CSS

## Technologies Used

- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)
- ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
- [react-parallax-tilt](https://www.npmjs.com/package/react-parallax-tilt)
- [react-card-flip](https://www.npmjs.com/package/react-card-flip)
- [TheCatAPI](https://thecatapi.com/)

## Installation

1. Clone the repository and install dependencies:

```bash
git clone https://github.com/FullStackPete/CatMemoryGame/
cd CatMemoryGame
npm install
```
2. Add .env file
3. Register on https://thecatapi.com
4. Copy your ApiKey from email into .env file like this: 
VITE_CatApiKey="YourApiKey"
5. Run app as dev:
```bash
npm run dev
```
6. Visit localhost:5173

## Usage

Play the memory game by clicking on cards.
Wait for cards to randomize.
Choose a card that you didn't pick yet.

Enjoy the parallax tilt effects and cat images from TheCatAPI!

## Acknowledgments

- All website graphics are designed by [Weronika Florków](https://instagram.com/weronikaflorkow)
- Mockup provided by <a href="http://www.freepik.com">rezaazmy/Freepik</a>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
