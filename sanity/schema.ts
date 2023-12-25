import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import post from './schemas/post'
import author from './schemas/author'
import tag from './schemas/tag'
import showCasePost from './schemas/showCasePost'
import featuredPost from './schemas/featuredPost'
import homeCoverPost from './schemas/homeCoverPost'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, tag, blockContent, showCasePost, featuredPost, homeCoverPost],
}
