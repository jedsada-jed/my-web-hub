export interface SiteCard {
  title: string
  url: string
  emoji?: string
  image?: string
}

export interface SitesConfig {
  title?: string
  cards: SiteCard[]
}
