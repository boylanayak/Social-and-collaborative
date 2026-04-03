import { useState } from 'react';
import { topics } from '@/lib/mock-data';
import { ForumHeader } from '@/components/ForumHeader';
import { TopicCard } from '@/components/TopicCard';
import { TagSidebar } from '@/components/TagSidebar';
import { CreateTopicDialog } from '@/components/CreateTopicDialog';

const Index = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [createOpen, setCreateOpen] = useState(false);

  const pinned = topics.filter((t) => t.isPinned);
  const regular = topics.filter((t) => !t.isPinned);

  const filterByTag = (list: typeof topics) =>
    selectedTag ? list.filter((t) => t.tags.some((tag) => tag.id === selectedTag)) : list;

  return (
    <div className="min-h-screen bg-background">
      <ForumHeader onNewTopic={() => setCreateOpen(true)} />

      <div className="container flex gap-8 py-6">
        <TagSidebar selectedTag={selectedTag} onSelectTag={setSelectedTag} />

        <main className="min-w-0 flex-1">
          {filterByTag(pinned).length > 0 && (
            <section className="mb-6">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                📌 Pinned
              </h2>
              <div className="flex flex-col gap-2">
                {filterByTag(pinned).map((topic) => (
                  <TopicCard key={topic.id} topic={topic} />
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Recent Topics
            </h2>
            <div className="flex flex-col gap-2">
              {filterByTag(regular).map((topic) => (
                <TopicCard key={topic.id} topic={topic} />
              ))}
              {filterByTag(regular).length === 0 && (
                <p className="py-12 text-center text-sm text-muted-foreground">
                  No topics found for this tag.
                </p>
              )}
            </div>
          </section>
        </main>
      </div>

      <CreateTopicDialog open={createOpen} onOpenChange={setCreateOpen} />
    </div>
  );
};

export default Index;
