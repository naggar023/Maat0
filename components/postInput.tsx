import { SubmitButton } from './submit-button';
import { postAction } from '@/app/actions';


const PostInput: React.FC = () => {
  return (
    <form className="max-w-sm flex align-center mx-auto">
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wanna post somethin?</label>
        <textarea name='post' id="post" className="block p-2.5 mx-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cook your post"></textarea>
        <SubmitButton formAction={postAction}>Post</SubmitButton>
    </form>
  );
};

export default PostInput;
