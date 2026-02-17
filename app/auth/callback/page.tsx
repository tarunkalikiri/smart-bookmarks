"use client";

import { useEffect } from "react";
import { supabase } from "../../../lib/supabase";

export default function Callback() {
  useEffect(() => {
    const handle = async () => {
      const url = new URL(window.location.href);
      const code = url.searchParams.get("code");

      if (code) {
        await supabase.auth.exchangeCodeForSession(code);
      }

      window.location.replace("/");
    };

    handle();
  }, []);

  return <p>Signing you in...</p>;
}
