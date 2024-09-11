import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = createClient()
  let { data: posts, error } = await supabase
  .from('posts')
  .select('content')
  return <pre>{JSON.stringify(posts)}</pre>
}