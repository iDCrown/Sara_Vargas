import React from 'react';

//style
import navegation from './navegation.module.scss'

const Navegation = ({section = []}) => {
  return(
    <nav className={navegation.nav}>
      <ul className={navegation.ul}>
        {
          section.map(s => {
            return (
              <li key={s.id} className={navegation.li}>
                <a href={`#${s.id}`}>
                  <span className={navegation.text}>
                    {s.text}
                  </span>
                </a>
              </li>
            );
          })
        }
      </ul>
    </nav>
  )
}

export default Navegation;