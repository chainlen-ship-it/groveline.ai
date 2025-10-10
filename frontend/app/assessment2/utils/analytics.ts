export type AnalyticsEventName =
  | 'assessment_started'
  | 'assessment_page_viewed'
  | 'assessment_quiz_started'
  | 'assessment_completed'
  | 'assessment_pdf_downloaded'
  | 'assessment_cta_clicked';

interface AnalyticsEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: any;
}

/**
 * Track an analytics event using Google Analytics
 * Abstraction layer for easy analytics provider switching
 */
export function trackEvent(
  eventName: AnalyticsEventName,
  params?: AnalyticsEventParams
): void {
  if (typeof window === 'undefined') return;

  // Google Analytics (gtag.js)
  if ((window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }

  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', eventName, params);
  }

  // Add other analytics providers here (e.g., Mixpanel, Segment)
}

/**
 * Track page view
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  if (typeof window === 'undefined') return;

  if ((window as any).gtag) {
    (window as any).gtag('config', 'G-BC515SS1FE', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Page View:', pagePath, pageTitle);
  }
}
