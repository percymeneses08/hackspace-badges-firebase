import React from 'react'
import { Link } from "react-router-dom"

import Badge from '../Badge/Badge'

import HackspaceMini from '../../images/hackspace-mini.png'
import Search from '../../images/search.svg'

// Esto es un Hook personalizado
function useSearchBadges(allBadges) {
  // Esto es va a ser el requerimiento con el cual nosotros queremos filtrar los resultados
  const [ query, setQuery ] = React.useState('')
  const [ filteredBadges, setFilteredBadges ] = React.useState(allBadges)
  // React.useMemo es para recordar las búsquedas ya realizadas, 
  React.useMemo(() => {
    const result = allBadges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
    })
    
    setFilteredBadges(result)
  }, [ allBadges, query ])

  return { query, setQuery, filteredBadges }
}

function BadgesList(props) {  
  const existingBadges = props.badges
  const { query, setQuery, filteredBadges } = useSearchBadges(existingBadges)

  return(
    <div className="badgesList">
      <div className="header">
        <div className="header-width">
          <img className="hackspaceLogo" src={HackspaceMini} alt="HackspaceMini logo"/>
          <div className="text-write">
            <div className="write">
              <img className="searchImg" src={Search} alt="search img"/>
              <input
                type="text"
                onChange={
                  (e) => {
                    setQuery(e.target.value)
                  }
                }
              />
            </div>
          </div>
          <Link className="button" to="/hackspace-badges-firebase/badges/create/badgesCreate">New Badge</Link>
        </div>
      </div>
      <div className="padding">
        <div className="unordered-list">
          {filteredBadges.map(badge => {
            return(
              <div className="list-item" key={badge.id}>
                <Link to={`/hackspace-badges-firebase/badges/${badge.id}`}>
                  <Badge
                    // BadgeWidth="378px"
                    // BadgeHeight="219.36px"
                    // fontSize="19.556px"

                    firstNameValue={badge.firstName}
                    lastNameValue={badge.lastName}
                    areaValue={badge.area || "Area"}
                    experienceValue={badge.experience || "Experience"}
                    portfolioValue={badge.portfolio || "Portfolio"}
                    emailValue={badge.email}
                  />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BadgesList