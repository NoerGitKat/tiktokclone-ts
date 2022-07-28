import { IComment } from '../../../interfaces';
import Comment from './Comment';

export interface ICommentsProps {
  comments: IComment[];
}

export default function Comments({ comments = [] }: ICommentsProps) {
  return (
    <section className="border-y-2 border-gray-200 mt-4 pt-4 px-10 bg-[#F8F8F8] lg:pb-0 pb-[100px] overflow-scroll lg:h-[475px]">
      <ul>
        {comments.map((comment) => (
          <Comment key={comment._key} comment={comment} />
        ))}
      </ul>
    </section>
  );
}
