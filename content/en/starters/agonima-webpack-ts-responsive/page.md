---
title: Webpack TypeScript Responsive
description: The responsive template for mobile games. Webpack & TypeScript. 
author: agonima
image: assets/starter-project-webpack-typescript-responsive.png
zip_url: https://github.com/talhaozdemir/agonima-webpack-ts-responsive/archive/refs/heads/main.zip 
website: https://github.com/talhaozdemir/agonima-webpack-ts-responsive
tags: ["typescript", "webpack", "responsive"]
enabled: false
---

Tired of seeing black bars at the edges of the screen?

Here is the responsive project template.

There is an 'AlignCanvas' component in the template. You can align the canvas left, right or center for the landscape and top, bottom or center for the portrait orientation.

You can also locate ui elements to the edges of the screen with 'AlignToScreen' component or you can write your own resize method to locate GameObjects wherever you want!

On the other hand, you will see 'gameAreaLeft, gameAreaTop, gameAreaRight, gameAreaBottom, gameAreaCenter, canvasAvailableSpace' properties in the 'AlignCanvas' component. You can use these responsive data to avoid objects overlapping. You can fit ui GameObjects to spaces in the canvas with using 'canvasAvailableSpace' data. This data returns width and height value that is available in the canvas other than game area. You can see an example in Ui scene resize method. 

I am planning to improve this template day by day. I have new ideas about it. You can follow the README file in the repository for updates.

I recommend this template for making mobile games.

Take a look to the [README](https://github.com/PhaserEditor2D/starter-template-webpack) of the project for some guidelines.
