import { FieldMediaImageFieldMediaImage } from '@/graphql/generated/schema'
import Image from 'next/image'

type Props = {
  entity: FieldMediaImageFieldMediaImage
  className?: string
  alt?: string
  derivative?: string
}

const MediaImage = ({
  entity,
  className,
  alt,
  derivative = 'derivative',
  ...imgProps
}: Props) => {
  const image = entity[derivative] || entity.derivative

  return (
    <Image
      src={image.url}
      width={image.width}
      height={image.height}
      className={className}
      alt={alt || entity.alt || ''}
      {...imgProps}
    />
  )
}

export default MediaImage
