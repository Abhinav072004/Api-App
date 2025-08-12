# React Native Note App - RESTful API

## Introduction
[![React Native](https://img.shields.io/badge/React%20Native-0.60-blue.svg?style=rounded-square)](https://facebook.github.io/react-native/)
[![Node.js](https://img.shields.io/badge/Node.js-v.10.16-green.svg?style=rounded-square)](https://nodejs.org/)



### What is React Native ?
React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS and UWP by enabling developers to use React along with native platform capabilities. [[1]](https://en.wikipedia.org/wiki/React_Native)

### Why using React Native ?
6 main reason why me using React Native for make a mobile app :

1. It's got iOS and Android covered
2. Reusable components allow hybrid apps to render natively
3. Apply React Native UI component to an existing app's code-without any rewriting at all
4. It’s one of the top mobile JavaScript frameworks among developers—and growing
5. React Native is all about the UI
6. Native app development is much more efficient

### How React Native works ?
Short explanation about **How React Native Works**.

React Native invokes Objective-C APIs to render to iOS components, or Java APIs to render to Android components. This sets React Native apart from other cross-platform app development options, which often end up rendering web-based views.

## Requirements
1. npm (node package manager)
2. react-native-cli (from npm)

## How to run the app ?
1. Clone or download first this repository with 
2. Open the project in your favorite text editor
3. Open your terminal or cmd and type
```
npm install
```
4. Open *\src\Public\redux\actions\notes.js*  and edit the **IP url** according to your ip backend
5. And the last just type in your terminal or cmd
```
react-native run-android
```
be sure if you connected with a device on debugging mode or use the emulator on debugging mode too.

## Demonstration

<p>Home Screen</p>
    <img src='src/Assets/DummyData/scrolling.gif' width=150 />
<p>Sort Ascending / Descending</p>
    <img src='src/Assets/DummyData/sort.gif' width=150 />
<p>Search</p>
    <img src='src/Assets/DummyData/search.gif' width=150 />
<p>Sort by Category</p>
    <img src='src/Assets/DummyData/sortbycategory.gif' width=150 />
<p>Insert Delete Note</p>
    <img src='src/Assets/DummyData/insertdeletecategory.gif' width=150 />
<p>Update Note</p>
    <img src='src/Assets/DummyData/updatenote.gif' width=150 />
<p>Insert Delete Category</p>
    <img src='src/Assets/DummyData/insertdeletenote.gif' width=150 />



