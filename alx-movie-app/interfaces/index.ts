import { ReactNode } from "react";

export interface ComponentProps {
  children: ReactNode
}

export interface ButtonProps {
  title: string
  action?: () => void // 'action' can be optional
}

export interface MovieProps {
  id?: string // 'id' can be optional
  posterImage: string
  releaseYear: string
  title: string
}

interface PrimaryImage {
  url: string
}

interface TitleText {
  text: string
}

interface ReleaseYear {
  year: string
}

export interface MoviesProps {
  id: string
  primaryImage: PrimaryImage
  titleText: TitleText
  releaseYear: ReleaseYear
}
