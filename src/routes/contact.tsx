import { createFileRoute } from '@tanstack/react-router'
import ContactPage from '@/components/pages/contact';

export const Route = createFileRoute('/contact')({
  component: contactPage,
})

function contactPage() {
  return <ContactPage/>
}
