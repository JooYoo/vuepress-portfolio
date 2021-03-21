---
title: Big Day - Backend
type: project
overviewImg: https://images.unsplash.com/photo-1542272201-b1ca555f8505?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80
languages:
  - name: JavaScript
    percent: 100
frameworks:
  - name: Node
  - name: Express
  - name: MongoDB
highlight: false
---

<h1 align="center">Big Day: Backend</h1>
<div align="center">2020.12 ~ 2021.04</div>

<p align="center">
  <strong>
   ・ <a href="https://github.com/JooYoo/node-bigDay" target="_blank">👨🏻‍💻 &nbsp; Github</a>
  </strong>
</p>

::: tip Contents
[[toc]]
:::

## About

The backend of the Project _Big Day_. The frontend of the Project's link see below. I used this project to practice my ability to develop full-stack applications. The API and Database of this project which I built, is NOT allowed to be used in other projects.

## Preview

<p align="center">
  <img src="https://pbs.twimg.com/media/Ew6h31cWEAEe6DP?format=jpg&name=large" />
</p>

## Link to

- 🔗 &nbsp; [Frontend](./BigDayFrontend.md)
- 🔗 &nbsp; [Backend](./BigDayBackend.md)

## User story

As a user I want to have a tool to keep track of important dates and shows how many days are left, so that I won't missing the important dates.

## Technologies

- Code: JavaScript
- Framework:
  - Runtime: Node.js
  - Backend Framework: Express.js
  - Database: MongoDB
  - Database Library: Mongoose
- Deployment: MongoDB Cloud, Heroku

## Setup

1. clone the project
2. install dependence: `npm i`
3. create `config/config.env` to define **MONGO_URI**
4. start project: `node server`
