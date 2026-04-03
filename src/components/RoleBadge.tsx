import type { Role } from '@/lib/mock-data';

const roleConfig: Record<Role, { label: string; className: string }> = {
  student: { label: 'Student', className: 'bg-student/15 text-student' },
  teacher: { label: 'Teacher', className: 'bg-teacher/15 text-teacher' },
};

export function RoleBadge({ role }: { role: Role }) {
  const config = roleConfig[role];
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${config.className}`}>
      {role === 'teacher' ? '📚' : '🎓'} {config.label}
    </span>
  );
}
