import {
  FieldMediaImageFieldMediaImage
} from '@/graphql/generated/schema'
import Image, { ImageProps } from 'next/image'

type Props = {
  entity: FieldMediaImageFieldMediaImage
  className?: string
  alt?: string
  derivative?: string
} & Partial<ImageProps>

const MediaImage = ({
  entity,
  className,
  alt,
  derivative = 'derivative',
  ...imgProps
}: Props) => {
  const image = entity[derivative] || entity.derivative
  const { width, height, ...imageProps } = imgProps
  return (
    <Image
      src={image.url}
      className={className}
      width={width || image.width}
      height={height || image.height}
      alt={alt || entity.alt || ''}
      {...imageProps}
    />
  )
}

export default MediaImage
