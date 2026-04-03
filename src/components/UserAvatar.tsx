import type { User } from '@/lib/mock-data';

const roleBorderColors: Record<string, string> = {
  student: 'ring-student/30',
  teacher: 'ring-teacher/30',
};

export function UserAvatar({ user, size = 'md' }: { user: User; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'h-7 w-7 text-xs',
    md: 'h-9 w-9 text-sm',
    lg: 'h-12 w-12 text-base',
  };

  return (
    <div
      className={`${sizeClasses[size]} flex items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground ring-2 ${roleBorderColors[user.role]}`}
    >
      {user.avatar}
    </div>
  );
}
