import createImageUrlBuilder from '@sanity/image-url'

const projectId = 'jg0vxk9b'
const dataset = 'development'

const imageBuilder = createImageUrlBuilder({projectId, dataset})

export const urlForImage = (source: any) => imageBuilder.image(source).auto('format').fit('max')
