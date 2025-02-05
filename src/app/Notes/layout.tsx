import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'My Achievements',
    description: 'My Hardwork and Achievements',
    openGraph: {
        title: 'My Achievements',
        description: 'A place where i flex my achievements',
        type: 'website',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 