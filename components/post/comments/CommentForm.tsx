export interface ICommentFormProps {}

export default function CommentForm(props: ICommentFormProps) {
  return (
    <form onSubmit={() => {}} className="flex gap-4">
      <input
        // value={comment}
        // onChange={(e) => setComment(e.target.value.trim())}
        className="bg-primary px-6 py-4 text-md font-medium border-2 w-[250px] md:w-[700px] lg:w-[350px] border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 flex-1 rounded-lg"
        placeholder="Add comment.."
      />
      <button className="text-md text-gray-400 " onClick={() => {}}>
        {null ? 'Commenting...' : 'Comment'}
      </button>
    </form>
  );
}
