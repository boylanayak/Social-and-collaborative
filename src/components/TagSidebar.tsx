import { tags } from '@/lib/mock-data';
import { Hash } from 'lucide-react';

export function TagSidebar({
  selectedTag,
  onSelectTag,
}: {
  selectedTag: string | null;
  onSelectTag: (id: string | null) => void;
}) {
  return (
    <aside className="hidden w-56 shrink-0 lg:block">
      <div className="sticky top-20">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Tags
        </h3>
        <nav className="flex flex-col gap-0.5">
          <button
            onClick={() => onSelectTag(null)}
            className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm transition-colors ${
              !selectedTag ? 'bg-accent/15 font-medium text-accent-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            <Hash className="h-3.5 w-3.5" />
            All Topics
          </button>
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => onSelectTag(tag.id)}
              className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                selectedTag === tag.id
                  ? 'bg-accent/15 font-medium text-accent-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <Hash className="h-3.5 w-3.5" />
              {tag.name}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
