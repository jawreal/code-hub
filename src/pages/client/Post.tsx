import UserPost from '../../components/UserPost';

const Post = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col justify-start gap-y-3 items-center p-2" >
       <UserPost width="w-full max-w-[35rem]" isPreview={false} />
       <UserPost width="w-full max-w-[35rem]" isPreview={false} isComment={true}/>
    </div>
    );
};

export default Post;