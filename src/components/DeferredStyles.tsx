'use client';

import { useEffect } from 'react';

export default function DeferredStyles() {
  useEffect(() => {
    // This creates a link element for the CSS and loads it after the initial render
    const linkEl = document.createElement('link');
    linkEl.rel = 'stylesheet';
    linkEl.href = '/css/deferred.css'; // Path to public directory
    linkEl.type = 'text/css'; // Explicitly set the MIME type
    linkEl.media = 'all';
    
    // Add it to the document
    document.head.appendChild(linkEl);
    
    return () => {
      // Clean up when component unmounts
      if (document.head.contains(linkEl)) {
        document.head.removeChild(linkEl);
      }
    };
  }, []);
  
  return null;
} 