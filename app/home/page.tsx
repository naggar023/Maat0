import Post from "@/components/post";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import Link from 'next/link';
import PostInput from "@/components/postInput";
interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  timestamp: string;
}


export default async function HomePage() {
  const supabase = createClient();

  const { data: posts, error } = await supabase
    .from('posts')
    .select('*');


  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }
  if (error){
    return ("Something occured please wait untill the dev make a cup of coffee and fix it")
  }
  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <PostInput/>
      <div className="w-full ">
          {posts.map((post)=>(<Link key={post.id} href={`/home/post/${post.id}`}>
            <Post title={post.title}
        content={post.content}
        author={post.author}
        timestamp={post.created_at}/>
          </Link>)).reverse()}
      </div>
    </div>
  );
}
