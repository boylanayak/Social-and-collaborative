import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Eye, Pin, Lock, Trash2, Flag, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { topics, currentUser } from '@/lib/mock-data';
import { UserAvatar } from '@/components/UserAvatar';
import { RoleBadge } from '@/components/RoleBadge';
import { TagBadge } from '@/components/TagBadge';
import { ForumHeader } from '@/components/ForumHeader';
import { CreateTopicDialog } from '@/components/CreateTopicDialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const hours = Math.floor(diff / 3600000);
  if (hours < 1) return 'just now';
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

const TopicDetail = () => {
  const { id } = useParams();
  const topic = topics.find((t) => t.id === id);
  const [replyText, setReplyText] = useState('');
  const [createOpen, setCreateOpen] = useState(false);

  if (!topic) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background">
        <p className="text-muted-foreground">Topic not found</p>
        <Link to="/" className="text-sm text-accent hover:underline">
          ← Back to forum
        </Link>
      </div>
    );
  }

  const isTeacher = currentUser.role === 'teacher';

  return (
    <div className="min-h-screen bg-background">
      <ForumHeader onNewTopic={() => setCreateOpen(true)} />

      <div className="container max-w-3xl py-6">
        <Link
          to="/"
          className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to topics
        </Link>

        {/* Main post */}
        <article className="animate-fade-in rounded-lg border bg-card p-5">
          <div className="flex items-start gap-3">
            <UserAvatar user={topic.author} size="lg" />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-foreground">{topic.author.name}</span>
                <RoleBadge role={topic.author.role} />
                <span className="text-xs text-muted-foreground">· {timeAgo(topic.createdAt)}</span>
              </div>

              <h1 className="mt-2 flex items-center gap-2 text-lg font-bold text-foreground">
                {topic.isPinned && <Pin className="h-4 w-4 text-accent" />}
                {topic.isLocked && <Lock className="h-4 w-4 text-muted-foreground" />}
                {topic.title}
              </h1>

              <div className="mt-2 flex flex-wrap gap-1.5">
                {topic.tags.map((tag) => (
                  <TagBadge key={tag.id} tag={tag} />
                ))}
              </div>

              <div className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-foreground/85">
                {topic.content}
              </div>

              <div className="mt-4 flex items-center gap-4 border-t pt-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Heart className="h-3.5 w-3.5" /> {topic.likes}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5" /> {topic.views}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-3.5 w-3.5" /> {topic.replies.length} replies
                </span>
                {isTeacher && (
                  <div className="ml-auto flex gap-2">
                    <button className="flex items-center gap-1 text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 className="h-3.5 w-3.5" /> Delete
                    </button>
                    <button className="flex items-center gap-1 text-muted-foreground hover:text-accent transition-colors">
                      <Flag className="h-3.5 w-3.5" /> Moderate
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* Replies */}
        <section className="mt-6">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {topic.replies.length} {topic.replies.length === 1 ? 'Reply' : 'Replies'}
          </h2>

          <div className="flex flex-col gap-3">
            {topic.replies.map((reply) => (
              <div
                key={reply.id}
                className="animate-fade-in rounded-lg border bg-card p-4"
              >
                <div className="flex items-start gap-3">
                  <UserAvatar user={reply.author} size="sm" />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-foreground">
                        {reply.author.name}
                      </span>
                      <RoleBadge role={reply.author.role} />
                      <span className="text-xs text-muted-foreground">
                        · {timeAgo(reply.createdAt)}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/85">
                      {reply.content}
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-accent transition-colors">
                        <Heart className="h-3 w-3" /> {reply.likes}
                      </button>
                      {isTeacher && (
                        <button className="flex items-center gap-1 hover:text-destructive transition-colors">
                          <Trash2 className="h-3 w-3" /> Remove
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reply box */}
        {!topic.isLocked ? (
          <div className="mt-6 animate-fade-in rounded-lg border bg-card p-4">
            <div className="flex items-start gap-3">
              <UserAvatar user={currentUser} size="sm" />
              <div className="min-w-0 flex-1">
                <Textarea
                  placeholder="Write a reply..."
                  rows={3}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <div className="mt-2 flex justify-end">
                  <Button
                    size="sm"
                    disabled={!replyText.trim()}
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Reply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 rounded-lg border border-dashed bg-muted/50 p-4 text-center text-sm text-muted-foreground">
            <Lock className="mx-auto mb-1.5 h-4 w-4" />
            This topic is locked. No new replies can be posted.
          </div>
        )}
      </div>

      <CreateTopicDialog open={createOpen} onOpenChange={setCreateOpen} />
    </div>
  );
};

export default TopicDetail;
