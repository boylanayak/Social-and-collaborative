import { Bell, Search, GraduationCap, Plus } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAvatar } from './UserAvatar';
import { RoleBadge } from './RoleBadge';
import { currentUser } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ForumHeader({ onNewTopic }: { onNewTopic: () => void }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container flex h-14 items-center gap-3">
        <Link to="/" className="flex items-center gap-2 font-semibold text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="hidden sm:inline">UniForum</span>
        </Link>

        <div className="flex-1" />

        {searchOpen ? (
          <div className="flex max-w-sm flex-1 items-center gap-2 animate-fade-in">
            <Input
              placeholder="Search topics..."
              className="h-8 text-sm"
              autoFocus
              onBlur={() => setSearchOpen(false)}
            />
          </div>
        ) : (
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search</span>
          </button>
        )}

        <button className="relative rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-accent-foreground">
            3
          </span>
        </button>

        <Button size="sm" onClick={onNewTopic} className="gap-1.5 bg-accent text-accent-foreground hover:bg-accent/90">
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">New Topic</span>
        </Button>

        <div className="flex items-center gap-2">
          <UserAvatar user={currentUser} size="sm" />
          <div className="hidden sm:block">
            <RoleBadge role={currentUser.role} />
          </div>
        </div>
      </div>
    </header>
  );
}
