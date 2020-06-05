import { UserView } from './userView';

export interface CommentView {
  id?: string
  content?: string
  createdAt?: any
  likesCount?: number
  user: UserView
}
