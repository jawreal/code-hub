import { memo, useState, useEffect, useCallback } from 'react';
import type { ChangeEvent } from 'react';
import Inputbox from './Inputbox';
import Button from './Button';
import { AtSign, Mail, MapPin, User } from 'lucide-react';

interface PropsType {
  closeModal?: () => void;
  data?: InfoType | undefined;
}

const EditInfo = ({ closeModal, data }: PropsType) => {
  const [info, setInfo] = useState<InfoType>({});
  
  useEffect(() => {
    if(data){
      setInfo({
        displayName: data?.displayName ?? "", 
        username: data?.username ?? "",
        email: data?.email ?? "", 
        address: data?.address ?? ""})
    }
  }, [data]);
  
  const setChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInfo(prevInfo => ({...prevInfo, [name]: value }))
  }, [info]);
  return (
    <div className="w-full flex flex-col gap-y-2 px-2">
      <div className="flex gap-x-2 justify-start items-start border-b border-zinc-200 dark:border-zinc-800 pb-3">
        <div className="flex flex-col w-full items-start">
           <span className="text-lg font-medium dark:text-zinc-200"> Edit Profile</span>
           <span className="text-zinc-500 text-sm">make changes changes to your profile</span> 
        </div>
      </div>
      <div className="w-full flex flex-col text-start gap-y-1">
        <span className="font-medium text-sm dark:text-zinc-200">Full Name</span>
        <Inputbox name="displayName" onChange={setChange} value={info?.displayName?? ""} icon={<User className="text-zinc-400 dark:text-zinc-600" size={22} />} placeholder="Your full name" />
      </div>
      <div className="w-full flex flex-col text-start gap-y-1">
        <span className="font-medium text-sm dark:text-zinc-200">Username</span>
        <Inputbox name="username" onChange={setChange} value={info?.username ?? ""} icon={<AtSign className="text-zinc-400 dark:text-zinc-600" size={22} />} placeholder="Your username" />
      </div>
      <div className="w-full flex flex-col text-start gap-y-1">
        <span className="font-medium text-sm dark:text-zinc-200">Email</span>
        <Inputbox name="email" onChange={setChange} value={info?.email ?? ""} icon={<Mail className="text-zinc-400 dark:text-zinc-600" size={22} />} placeholder="Your email" />
      </div>
      <div className="w-full flex flex-col text-start gap-y-1">
        <span className="font-medium text-sm dark:text-zinc-200">Address</span>
        <Inputbox name="address" onChange={setChange} value={info?.address ?? ""} icon={<MapPin className="text-zinc-400 dark:text-zinc-600" size={22} />} placeholder="Your address" />
      </div>
      <div className="w-full flex items-center pt-2 dark:border-zinc-800">
         <Button className="flex-1 font-medium text-zinc-400" text="Cancel" onClick={closeModal}/>
         <Button className="flex-1 bg-emerald-500 dark:bg-emerald-600 p-2 font-medium rounded-md text-white" text="Update" /> 
      </div>
    </div>
    );
}; 

export default memo(EditInfo);