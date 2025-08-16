// app/page.js
import { redirect } from 'next/navigation';

export default function IndexPage() {
  redirect('/portfolio'); // Server-side redirect
}