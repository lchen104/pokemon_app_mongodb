require('dotenv').config()

const express = require('express')
const app = express()
const PORT = 5002

// Import pokemon
// const pokemon = require('./models/pokemon.js')
const pokedex = require('./models/pokedex.js')

// import Pokemon
const Pokemon = require('./models/pokemon.js')

// import mongoose
const mongoose = require('mongoose');

// Connect With Mongoose 
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
});

// Connect Express to Mongo
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// Setting up the view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());




// This is called 'middleware'
// It runs in the middle of the request response cycle (in the middle)
// sometime after the request is received, but before the final route handler is called
// Be sure to put middleware at the top of your server.js file,
// so that other routes don't handle the request and send the response
// before the middleware can be executed.
// Most of the time, you won't write your own middleware,
// but a lot of plugins and extended functionality of express exist as middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

// Near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

// to add static background image
app.use(express.static('images'));


app.get('/', (req, res) => {
    // res.send('Welcome to the Pokemon App!')
    res.render('Main')
})

// index page to list all pokemons
app.get('/pokemon', async function(req, res) {
    const foundPokemons = await Pokemon.find({})
        res.render('Index', {
            pokemon: foundPokemons
    })

    // res.render('Index', {
    //     pokemon: pokemon
    // })
})



// First, we'll need a route for displaying the page in our server.js file.
// IMPORTANT: put this above your show route, so that the show route doesn't accidentally pick up a /fruits/new request.
// app.get('/pokemon/new', (req, res) => {
//     res.render('New');
// });

app.get('/pokemon/new', (req, res) => {
    res.render('New', {
        pokedex: pokedex
    });
});

// Since the form in the last step tells the browser to create a POST request to /fruits,
// we'll need to set up a route handler for this kind of request
app.post('/pokemon', async (req, res)=>{
    console.log(req.body.name)

    if(req.body.readyToFight === 'on'){ //if checked, req.body.readyToFight is set to 'on'
        req.body.readyToFight = true; //do some data correction
    } else { //if not checked, req.body.readyToFight is undefined
        req.body.readyToFight = false; //do some data correction
    }
    
    const newPokemon = {
        name: req.body.name,
        img: 'http://img.pokemondb.net/artwork/' + req.body.name.toLowerCase(),
        readyToFight: req.body.readyToFight
    }



    // pokemon.push(newPokemon)
    // res.redirect('/pokemon'); //send the user back to /pokemon



    const createdPokemon = await Pokemon.create(newPokemon)
    console.log(createdPokemon)
    res.redirect('/pokemon')

});


// Show Pokemon
app.get('/pokemon/:id', async (req, res) => {
    const onePokemon = await Pokemon.findById(req.params.id)
    // console.log(onePokemon.name)
    // console.log(pokedex)
    res.render('Show', {
        pokemon: onePokemon,
        pokedex: pokedex[req.params.id],
    })
})


app.listen(PORT, () => {
    console.log('listening on port', PORT);
});
