![](https://www.ufjf.br/wp-content/plugins/imgpgprinc_novo/arquivos/deptocomputacao/1.jpg)

# Practical Work of DCC196 - Mobile Device Programming Lab (Semester 2023-1)
## Professor Ronney Moreira de Castro

## 🚌 Cadê o Circular

This is a monorepo with both frontend with React-Native and backend API service using NodeJs, Typescript, SQLite and Prisma.

## 🚀 Quick start

1.  **Pre-requisites**

    - [Node v16+](https://nodejs.org/en/download)
    - [npm v8+](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
    - [yarn v1.22](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

2.  **Clone and move into the repository**

    ```shell
    git clone git@github.com:devgabmal/CadeCircular.git
    cd CadeCircular
    ```
3.  **Install all libs and dependencie**

    ```shell
    npm install
    cd CadeCircular-API
    yarn install
    ```
4. **Set environment variables**
   Inside `CadeCircular-API` folder, create a `.env` at the same level and same content as `.env.example`

## 🔍 About the project

**Project's goal:**
Students at the Federal University of Juiz de Fora JF campus use the free bus system to get around the different academic units and buildings in the university. The routes of these buses are fixed, one-way, and are named Odontology, which does not leave the campus ring road, and Hospital, which leaves the ring road and goes to the University Hospital before returning. In addition, these routes vary between the Circular route, which stops at all points on campus, and the more limited Restaurant route, to speed up transport at peak times.
Given the number of buses, - one on the Circular route and four more on the Restaurant route - the waiting time at the stops is large and difficult to estimate. This is because there is no system for locating the cars, but rather a spreadsheet of times, often inaccurate.
To help students in the decision on waiting for the bus, or use other means of transport, we idealized the development of an application that can estimate the real-time arrival forecast of vehicles on the campus. To do so, the information needs to be filled in by the driver before starting the route, and updated by a touch when passing by the bus stops. To a student user, the application should display a map with thumbnails of the cars on the last recorded location, along with the name of the route they are following.


## 👨‍💻 Conventions

**Branch Names**
  - all lowercase
  - only dashes (-) to separate words
  - should start with:
    ```
    feat_[api/front]_
    fix_[api/front]_
    docs_[api/front]_
    style_[api/front]_
    refactor_[api/front]_
    build_[api/front]_
    revert_[api/front]_
    ```
  - continue with short description
      eg: `feat_api_implement-feature-x`
  - please, keep it short!
      good: `feat_front_implement-return-form`
      bad: `feat_front_allow-users-to-fill-in-return-data-with-a-form`

**Commit messages**
  - All commit messages must follow conventions stated here
    ```
    git commit -m "feat(api/front): allow edit payment"
                   ^--^             ^-----------------^
                    |               |
                    |               +-> Summary in present tense.
                    |
                    +-------> Type:  feat, fix, docs, style, refactor, build or revert.
    ``` 

**Pull Request titles**
  - All pull requests must follow the same convenvion stated on commit messages above.
---
###### This application was developed by Computer Science students at Universidade Federal de Juiz de Fora
###### Developed by: Alexandre Rocha da Silva, Celso Gabriel Malosto, Lucas Paiva, Maria Cecília Romão Santos, e Rodrigo Soares de Assis
###### tags: `React-Native` `API` `Typescript` `Prisma` `SQLite` `UFJF`
