import { formatDistanceToNow } from 'date-fns';

const formatDate = (postTimstamp: string): string => {
  if(!postTimstamp) return 
  return formatDistanceToNow(new Date(postTimstamp), {
    addSuffix: true
  });
};

export default formatDate;