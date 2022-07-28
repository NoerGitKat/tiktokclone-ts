import { IComment } from '../../../interfaces';

export interface ICommentProps {
  comment: IComment;
}

export default function Comment({ comment }: ICommentProps) {
  return <li>{comment.comment}</li>;
}
