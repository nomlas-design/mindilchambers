import { blockContent } from './schemaTypes/blockContent';
import { category } from './schemaTypes/category';
import { post } from './schemaTypes/post';
import { author } from './schemaTypes/author';
import { homePage } from './schemaTypes/homePage';
import { globalContent } from './schemaTypes/globalContent';

export const schema = {
  types: [post, author, category, blockContent, homePage, globalContent],
};
