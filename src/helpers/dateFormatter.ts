import { formatDistanceToNow } from 'date-fns';

const formatDate = (postTimetamp: string): string | undefined => {
  if(!postTimetamp) return undefined
  return formatDistanceToNow(new Date(postTimetamp ?? Date.now()), {
    addSuffix: true
  });
};

export default formatDate;