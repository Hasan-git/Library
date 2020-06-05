import { UserView } from './userView';
import { CommentView } from './commentView';

export interface PostView {
  id: string
  content?: string
  createdAt?: any
  likesCount?: number
  shareCount?: number
  commentsCount?: number
  user: UserView
  comments?: CommentView[]
}
