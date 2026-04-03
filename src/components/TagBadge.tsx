import type { Tag } from '@/lib/mock-data';

export function TagBadge({ tag }: { tag: Tag }) {
  return (
    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${tag.color}`}>
      {tag.name}
    </span>
  );
}
