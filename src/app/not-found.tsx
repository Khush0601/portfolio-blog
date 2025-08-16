// app/not-found.js
import { redirect } from 'next/navigation';

export default function NotFound() {
    redirect('/'); // Redirect to the index page
}
