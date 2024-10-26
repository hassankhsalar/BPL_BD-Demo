# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Player Selection App

## Overview

The Player Selection App is a React-based application that allows users to select players from a predefined list. Users can manage their selection by adding and removing players while keeping track of their available coins. The app is designed to ensure that no duplicate selections are made and that the maximum number of players selected does not exceed six.

## Features

- **Player Selection**: Users can choose players from a list, which updates the available coin count.
- **Selection Limit**: A maximum of 6 players can be selected, with alerts notifying the user when the limit is reached or if they attempt to select a duplicate player.
- **Dynamic UI**: The interface updates in real time, showing selected players and allowing users to remove them from their selection.
- **Responsive Design**: The application is styled using Tailwind CSS for a modern and responsive user experience.

## Technologies Used

- **React**: For building the user interface.
- **JavaScript**: For application logic.
- **Tailwind CSS**: For styling and layout.