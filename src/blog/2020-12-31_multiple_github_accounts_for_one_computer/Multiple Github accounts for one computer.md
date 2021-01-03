---
title: Multiple GitHub accounts for one computer
date: 2020/12/31
keyword: Git
description: HTTPS approach
type: blog
---

<h1 align="center">Multiple GitHub accounts for one computer</h1>
<div align="center">2020.12.31</div>

::: tip Contents
[[toc]]
:::

## 🎮 Usage

It is possible that we need to use multiple Git accounts on the same computer, e.g. one for work-project another one for side-project. In this case, we want to use the account separately when we push the changes.

## 🎯 Goal

Use the _work-project-account_ for work, and the _side-project-account_ for the side-project on the same computer.

## 🦶🏻 Steps

### Step 1. Check git config

1. Clone the project to local.
2. Ahead to the project location.

   ```bash
   $ cd [project-location]
   ```

3. Check the _git config_ for local.

   We can see the _user.name_ and _user.email_ for the current configuration. We should see the global configuration

   ```bash
   $ git config --local -e
   ```

4. Quit the VIM mode: `:q` + `enter`

### Step 2. Active local credential

1. Still at the Project location

   ```bash
   $ git config --local credential.useHttpPath true
   ```

2. If we check the local _git config_ via the _Step 1_ , we can see `useHttpPath = true`

### Step 3. Setup the current project account

1. Still at the Project location

   ```bash
   $ git config --local user.name [YOUR_USER_NAME]
   $ git config --local user.email [YOUR_USER_EMAIL]
   ```

2. If we check the local _git config_ via the approach from _Step 1_ , we can see the _[user.name](http://user.name)_ and _[user.email](http://user.email)_ are already updated.
3. After commit and push the change, we can see the current project has its own **Credential Record**. The same approach can be used to config multiple projects. Each project should have its own Credential Record.
   - mac: Keychain Access
   - windows: Credential Manager
