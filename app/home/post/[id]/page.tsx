import { createClient } from '@/utils/supabase/server';
import { useRouter } from 'next/navigation';

type PostProps = {
  params: { id: string };
};

const PostPage = async ({ params }: PostProps) => {
  const { id } = params;
  const supabase = createClient()  
  const { data: post, error } = await supabase
    .from('posts')
    .select('id, title, content, author, created_at')
    .eq('id', id)
    .single();
  if (!post) {
    return <div className="text-center mt-20 text-red-500">Post not found</div>;
  }

  return (
    <div className="min-h-screen  flex items-center justify-center p-8">
      <div className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 mb-6">{post.content}</p>
        <div className="text-gray-500 text-sm">
          <span>By {post.author}</span> | <span>{post.created_at}</span>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
