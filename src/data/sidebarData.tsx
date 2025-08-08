import { 
  Home, Trophy, HelpCircle, Tags, Plus, LayoutGrid, 
  BookOpen, Layers, Award, Calendar, Sparkles, Zap, 
  MessageSquareMore, Star, User, Settings, LogOut 
} from "lucide-react";

const size: number = 19;

export const challengeItems: ITEMS_TYPE[] = [
  { name: "Overview", icon: <LayoutGrid size={size} /> },
  { name: "Beginner", icon: <BookOpen size={size} /> },
  { name: "Intermediate", icon: <Layers size={size} /> },
  { name: "Advanced", icon: <Award size={size} /> },
  { name: "Weekly", icon: <Calendar size={size} /> },
];

export const questionItems: ITEMS_TYPE[] = [
  { name: "Newest", icon: <Sparkles size={size} /> },
  { name: "Active", icon: <Zap size={size} /> },
  { name: "Unanswered", icon: <HelpCircle size={size} /> },
  { name: "Frequently Asked", icon: <MessageSquareMore size={size} /> },
  { name: "Top Rated", icon: <Star size={size} /> },
];

export const navItems: ITEMS_TYPE[] = [
  { name: "Home", icon: <Home size={size} /> },
  { name: "Challenges", icon: <Trophy size={size} /> },
  { name: "Create Post", icon: <Plus size={size} /> },
  { name: "Questions", icon: <HelpCircle size={size} /> },
  { name: "Tags", icon: <Tags size={size} /> },
];

export const navDpItems = [
  { name: "Profile", icon: <User size={size} /> },
  { name: "Settings", icon: <Settings size={size} /> },
  { name: "Sign Out", icon: <LogOut size={size} /> }
];
