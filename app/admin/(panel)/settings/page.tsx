import { getStore } from '@/lib/store'
import { PageHeader } from '../ui'
import SettingsForm from './SettingsForm'

export default async function AdminSettingsPage() {
  const { settings } = await getStore()
  return (
    <div className="max-w-3xl space-y-6">
      <PageHeader title="Shop details" description="Shown in the header, footer, home page and on every WhatsApp button." />
      <SettingsForm settings={settings} />
    </div>
  )
}
