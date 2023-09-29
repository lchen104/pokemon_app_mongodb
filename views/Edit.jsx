import React from 'react'
const Default = require('./layout/Default')

const Edit = ({pokemon}) => {
    // console.log(pokemon.name)
    
    const container = {
      border: '1px solid black',
      textAlign: 'center',
      width: '100%',
      height: '95vh',
      margin: '0px,',
      padding: '0px',
      backgroundImage: 'url("/pokemon-bg.jpeg")'
    }
  
    const content = {
      fontFamily: 'sans-serif',
      border: '1px solid black',
      textAlign: 'center',
      backgroundColor: 'black',
      color: 'white'
    }
  
    const h1 = {
      fontFamily: 'sans-serif',
      // border: '1px solid black',
      // textAlign: 'center',
      // backgroundColor: 'black',
      color: 'white'
    }
  
    const h4 = {
      fontFamily: 'sans-serif',
      // border: '1px solid black',
      // textAlign: 'center',
      // backgroundColor: 'black',
      color: 'black',
      textAlign: 'center'
    }
  
    const nav = {
      textAlign: 'center',
    }
  
    const myInput = {
          margin: '5px',
          width: '300px',
          // border: '1px solid black',
          padding: '5px'
    }
  
    const span = {
      fontWeight: 'bold'
    }
  
    const label = {
      fontFamily: 'sans-serif',
      fontSize: 'large'
    }

  return (
    <Default title='Edit Pokemon Page'>
    

    <div style={container}>
        <div style={content}>
            <h1 style={h1}>Edit Pokemon page</h1>
        </div>
        
        <nav style={nav}>
            <h1 style={h1}>
              <a href="/" alt="">Home</a> | <a href="/pokemon" alt="List Pokemon">List Pokemon</a> | <a href="/pokemon/new" alt="Add Pokemon">Create Pokemon</a>
            </h1>
        </nav>


        <form method='POST' action={`/pokemon/${pokemon._id}?_method=PUT`}>
            <p>
            <label style={label}>Name</label><br />
            <input style={myInput} type='text' name='name' disabled defaultValue={pokemon.name} />
            </p>
            <p>
            <label style={label}>Img</label><br />
              <input style={myInput} type='text' name='img' disabled defaultValue={pokemon.img} />
            </p>
            <p>
            <label style={label}>Ready To Fight:</label>
              { pokemon.readyToFight ? <input type="checkbox" name="readyToFight" defaultChecked /> : <input type="checkbox" name="readyToFight"/> }
            </p>
            <p><input style={myInput} type='submit' value='Submit Changes' /></p>
        </form>



    </div>
    <h4 style={h4}>Copyright &copy; 2023. Pika Pika. All Rights Reserved.</h4>



    </Default>
  )
}

module.exports = Edit