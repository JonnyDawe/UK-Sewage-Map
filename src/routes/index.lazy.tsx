import { createLazyFileRoute } from '@tanstack/react-router';

import { App } from '@/components/App/App';

export const Route = createLazyFileRoute('/')({
  component: () => <App />,
});
