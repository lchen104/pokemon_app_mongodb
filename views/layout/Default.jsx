import React from 'react'

function Default({children, title}) {
  return (
    <html>
        <head>
            <title>{title}</title>
        </head>
        <body>
            {/* <h1>{title}</h1> */}
            {children}
        </body>
    </html>
  )
}

module.exports = Default