import React from 'react'
const Default = require('./layout/Default')

const Index = ({pokemon}) => {
    // console.log(pokemon)
    const h1 = {
      fontFamily: 'sans-serif',
      // border: '1px solid black',
      // textAlign: 'center',
      // backgroundColor: 'black',
      color: 'white'
    }
    
    const main = {
      border: '1px solid black',
      textAlign: 'center',
      width: '100%',
      height: '95vh',
      margin: '0px,',
      padding: '0px',
      backgroundImage: 'url("../pokemon-bg.jpeg")',
      // backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }

    const content = {
      fontFamily: 'sans-serif',
      border: '1px solid black',
      textAlign: 'center',
      backgroundColor: 'black',
      color: 'white'
    }

    const container = {
      display: 'flex',
      // border: '1px solid black',
      textAlign: 'center',
      justifyContent: 'center',
      // width: '800px',
      // overflow: 'auto',
      flexWrap: 'wrap',
    }


    const card = {

      width: '200px',
      height: '370px',
      border: '10px solid lightgrey',
      borderRadius: '10px',
      margin: '5px',
      padding: '5px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      boxShadow: '5px 5px 30px #141414'
    }


    const img = {
      width: '150px'
    }

    const nav = {
      textAlign: 'center',
    }
    
    const h4 = {
      fontFamily: 'sans-serif',
      // border: '1px solid black',
      // textAlign: 'center',
      // backgroundColor: 'black',
      color: 'black',
      textAlign: 'center'
    }

    return (
      <Default title={'Pokemon Index Page'}>
        <div style={main}>
          <div style={content}>
            {/* <h1 style={h1}>See All The Pokemon!</h1> */}
            <h1 style={h1}>You have {pokemon.length} { pokemon.length > 1 ? 'Pokemons' : 'Pokemon'}</h1>
          </div>

            <nav style={nav}>
                <h2>
                  <a href="/" alt="">Home</a> | <a href="/pokemon" alt="List Pokemon">List Pokemon</a> | <a href="/pokemon/new" alt="Add Pokemon">Create Pokemon</a>
                </h2>
            </nav>
            <div style={container}>
                {
                    pokemon.map((poke, i) => (
                      <>
                        <div style={card} key={i}>

                          <div>
                            <h2><a href={`/pokemon/${poke.id}`}> {poke.name[0].toUpperCase() + poke.name.slice(1)} </a></h2>
                                <img style={img} src={poke.img + '.jpg'} alt={poke.name} />
                                {/* <h3>{poke.readyToFight ? 'Ready to FIGHT!' : 'Cowards away...!'}</h3> */}
                                
                          </div>

                            <div>
                              <p>
                                <form method='POST' action={`/pokemon/${poke._id}?_method=DELETE`}>
                                {/* Delete button */}
                                    <input type="submit" value="DELETE"/>
                                </form>
                              </p>
                              <p>
                                <a href={`/pokemon/${poke._id}/edit`}> Edit {poke.name[0].toUpperCase() + poke.name.slice(1)} </a>
                              </p>
                            </div>

                        </div>
                       </> 
                    )) 
                }
            </div>

        </div>
        <h4 style={h4}>Copyright &copy; 2023. Pika Pika. All Rights Reserved.</h4>
        </Default>
    )
}

module.exports = Index;