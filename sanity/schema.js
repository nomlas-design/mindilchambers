import { blockContent } from './schemaTypes/blockContent';
import { homePage } from './schemaTypes/homePage';
import { globalContent } from './schemaTypes/globalContent';
import { member } from './schemaTypes/member';
import { article } from './schemaTypes/article';

export const schema = {
  types: [blockContent, homePage, globalContent, member, article],
};
