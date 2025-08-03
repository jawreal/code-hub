import { formatDistanceToNow } from 'date-fns';

const formatDate = (postTimetamp: string): string => {
  if(!postTimetamp) return 
  return formatDistanceToNow(new Date(postTimetamp ?? Date.now()), {
    addSuffix: true
  });
};

export default formatDate;