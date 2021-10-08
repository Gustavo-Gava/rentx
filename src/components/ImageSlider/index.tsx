import React from 'react'

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImage,
  CarImageWrapper,
} from './styles'

interface Props {
  imagesUrl: string[]
}

export function ImageSlider({ imagesUrl }: Props){
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex isActive={true} />
        <ImageIndex isActive={false} />
        <ImageIndex isActive={false} />
        <ImageIndex isActive={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage 
          source={{uri: imagesUrl[0]}}
          resizeMode="contain"
        />
      </CarImageWrapper>
    </Container>
  )
}