import type { SiteCard } from '../types'
import './Card.css'

interface Props {
  card: SiteCard
}

export default function Card({ card }: Props) {
  return (
    <a
      className="card"
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="card-icon">
        {card.image ? (
          <img src={card.image} alt={card.title} />
        ) : (
          card.emoji ?? '🔗'
        )}
      </span>
      <span className="card-title">{card.title}</span>
    </a>
  )
}
