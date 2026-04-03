'use client';

import { useEffect } from 'react';
import { onCLS, onLCP, onINP, onFCP, onTTFB } from 'web-vitals';

type MetricName = 'CLS' | 'LCP' | 'INP' | 'FCP' | 'TTFB';

function sendToGtag(metric: { name: MetricName; value: number; id: string }) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (typeof window === 'undefined' || !measurementId) return;

  const gtag = (window as unknown as { gtag?: Function }).gtag;
  if (typeof gtag !== 'function') return;

  gtag('event', metric.name, {
    event_category: 'Web Vitals',
    event_label: metric.id,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    non_interaction: true,
    send_to: measurementId,
  });
}

export default function WebVitalsTracker() {
  useEffect(() => {
    onCLS(sendToGtag);
    onLCP(sendToGtag);
    onINP(sendToGtag);
    onFCP(sendToGtag);
    onTTFB(sendToGtag);
  }, []);

  return null;
}
