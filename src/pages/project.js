import React from 'react';

import OnTheScene from "../assets/project1.png"
import Pokemon from "../assets/team-page.jpg"
import Lucid from "../assets/lucid-game.png"
import Book from "../assets/book-search.png"
import ShopShop from "../assets/shop-shop.png"

import ProjectDiv from '../components/ProjectDiv';

const Project = () => {
    const projects= [
        {
            title: 'Lucid Game Review',
            image: Lucid,
            github: 'https://github.com/rkurian97/bc-project-3',
            live: 'https://lucid-game-review.herokuapp.com/',
            description: 'Lucid Game Review is a Video Game review blog with social networking features. Features that are soon to come are the ability to add comments.',
            tags: ['#Javascript', '#MERN', '#Tailwind.css', '#GraphQL', '#HTML5', '#CSS3']
        },
        {
            title: 'On the Scene',
            image: OnTheScene,
            github: 'https://github.com/rkurian97/bc-project-1',
            live: 'https://rkurian97.github.io/bc-project-1/',
            description: "On The Scene is a Movie Database that provides streaming availability details for Movies and Television Shows.",
            tags: ['#Javascript', '#HTML5', '#CSS3', '#Bulma', '#Local Storage']
        },
        {
            title: 'Pokemon Team Builder',
            image: Pokemon,
            github: 'https://github.com/rkurian97/bc-project-2',
            live: 'https://bc-project-2.herokuapp.com/',
            description: "The Pokemon Team Builder application has been created for fans of Pokemon, and anyone interested in learning, playing and having fun in the Pokemon world. The user can build their own team, and select the Pokemons as they like. This application uses the pokeapi.co API to retrieve Pokemon data",
            tags: ['#Javascript', '#Node.js', '#Express.js', '#MySQL/Sequelize', '#Handlebars.js', '#REST API', '#Passport.js', '#HTML5', '#CSS3']
        },
        {
            title: 'Book Search Engine',
            image: Book,
            github: 'https://github.com/rkurian97/book-search-engine',
            live: 'https://book-search-engine-rk.herokuapp.com/',
            description: 'Book search engine allows you to create an account and use the google Api to search through books and save them.',
            tags: ['#MERN', '#GraphQL', '#HTML5', '#CSS3', '#Javascript']
        },
        {
            title: 'Shop-Shop',
            image: ShopShop,
            github: 'https://github.com/rkurian97/redux-store',
            live: 'https://shopshop-redux-store.herokuapp.com/',
            description: 'Shop-shop is an app that allows you to checkout items and buy them in the shop if you sign up. The original app used React Context for global state management, but this app was refactored to use Redux.',
            tags: ['#MERN', '#GraphQL', '#Stripe API', '#Redux']
        }
    ];

    return (
        <div className=' flex-grow bg-gray-800 pb-5 pt-5'>

            {
                projects.map((project) =>
                    <ProjectDiv title={project.title} description={project.description} image={project.image} tags={project.tags} github={project.github} live={project.live}/>
                )
            }


        </div>
    );
};

export default Project;