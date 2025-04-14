// /core/layout/LayoutSection.tsx

import { ReactNode } from 'react';

export const LayoutSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="grid gap-4">{children}</div>
  </section>
);
