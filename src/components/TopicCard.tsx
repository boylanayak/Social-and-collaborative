import { MessageSquare, Eye, Heart, Pin, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Topic } from '@/lib/mock-data';
import { UserAvatar } from './UserAvatar';
import { RoleBadge } from './RoleBadge';
import { TagBadge } from './TagBadge';

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const hours = Math.floor(diff / 3600000);
  if (hours < 1) return 'just now';
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export function TopicCard({ topic }: { topic: Topic }) {
  return (
    <Link
      to={`/topic/${topic.id}`}
      className="group block animate-fade-in rounded-lg border bg-card p-4 transition-all hover:border-accent/40 hover:shadow-md"
    >
      <div className="flex gap-3">
        <UserAvatar user={topic.author} />
        <div className="min-w-0 flex-1">
          <div className="flex items-start gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              {topic.isPinned && (
                <Pin className="h-3.5 w-3.5 shrink-0 text-accent" />
              )}
              {topic.isLocked && (
                <Lock className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
              )}
              <h3 className="text-sm font-semibold leading-snug text-foreground group-hover:text-accent transition-colors">
                {topic.title}
              </h3>
            </div>
          </div>

          <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-muted-foreground">{topic.author.name}</span>
            <RoleBadge role={topic.author.role} />
            <span className="text-xs text-muted-foreground">· {timeAgo(topic.createdAt)}</span>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            {topic.tags.map((tag) => (
              <TagBadge key={tag.id} tag={tag} />
            ))}
          </div>

          <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <MessageSquare className="h-3.5 w-3.5" />
              {topic.replies.length}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="h-3.5 w-3.5" />
              {topic.views}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="h-3.5 w-3.5" />
              {topic.likes}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
