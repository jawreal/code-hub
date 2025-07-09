import { Home, Trophy, HelpCircle, Tags, Plus, LayoutGrid, BookOpen, Layers, Award, Calendar, Sparkles, Zap, MessageSquareMore, Star, User, Settings, LogOut } from "lucide-react";


export const challengeItems: ITEMS_TYPE[] = [
  { name: "Overview", icon: <LayoutGrid size={22} /> },
  { name: "Beginner", icon: <BookOpen size={22} /> },
  { name: "Intermediate", icon: <Layers size={22} /> },
  { name: "Advanced", icon: <Award size={22} /> },
  { name: "Weekly", icon: <Calendar size={22} /> },
  ];  
  
export const questionItems: ITEMS_TYPE[] = [
  { name: "Newest", icon: <Sparkles size={22} /> },
  { name: "Active", icon: <Zap size={22} /> },
  { name: "Unanswered", icon: <HelpCircle size={22} /> },
  { name: "Frequently Asked", icon: <MessageSquareMore size={22} /> },
  { name: "Top Rated", icon: <Star size={22} /> },
];

export const navItems: ITEMS_TYPE[] = [
  { name: "Home", icon: <Home size={22} /> },
  { name: "Challenges", icon: <Trophy size={22} /> },
  { name: "Create Post", icon: <Plus size={22} /> },
  { name: "Questions", icon: <HelpCircle size={22} /> },
  { name: "Tags", icon: <Tags size={22} /> },
  ];  
  
  
export const navDpItems = [
  { name: "Profile", icon: <User size={22} /> },
  { name: "Settings", icon: <Settings size={22} /> },
  { name: "Sign Out", icon: <LogOut size={22} /> }
];