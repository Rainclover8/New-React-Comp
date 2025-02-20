'use client'
import { useState, useEffect } from 'react';
import { createClient, Session } from '@supabase/supabase-js'; // Session tipini import et
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const supabase = createClient('https://fufycvedmabhobwzlaur.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1ZnljdmVkbWFiaG9id3psYXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwNTQ2NTksImV4cCI6MjA1NTYzMDY1OX0.sPpCk4E5zDANnCqYX5GJS-kpAPnf38xXWg5Kpxk25AA');

export default function Home() {
  const [session, setSession] = useState<Session | null>(null); // useState tipini belirttik

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div className="bg-white h-screen flex justify-center items-center">
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      </div>
    );
  } else {
    return (
      <div className="bg-white h-screen flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Logged in successfully!</h2>
          <p className="mt-4">Welcome, {session.user.email}</p>
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              setSession(null);
            }}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }
}
