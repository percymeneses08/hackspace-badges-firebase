import React from 'react'
import { Link } from 'react-router-dom'

import Badge from '../../components/Badge/Badge'
import DeleteBadgeModal from '../../components/DeleteBadgeModal/DeleteBadgeModal'

function BadgeDetails(props) {
  const badge = props.badge
  return(
    <div className="badgeDetails">
      <div className="badgeContainerFontSize">
        <Badge
          fontSize="40px"

          firstNameValue={badge.firstName}
          lastNameValue={badge.lastName}
          areaValue={badge.area || "Area"}
          experienceValue={badge.experience || "Experience"}
          portfolioValue={badge.portfolio || "Portfolio"}
          emailValue={badge.email}
        />
      </div>
      <div className="options">
        <div className="edit">
          <Link 
            className="button"
            to={`/hackspace-badges-firebase/badges/${badge.id}/edit`}>
            Edit
          </Link>
        </div>
        <div className="delete">
          <button onClick={props.onOpenModal} className="button">Delete</button>
          <DeleteBadgeModal
            isOpen={props.modalIsOpen}
            onClose={props.onCloseModal}
            onDeleteBadge={props.onDeleteBadge}
          />
        </div>
      </div>
    </div>
  )
}

export default BadgeDetails